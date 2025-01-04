const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();
const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2;
const {Product} = require('../models/products.js');

router.get("/", async (req, res) => {
    try {
        const { minPrice, maxPrice, categories, brands, category } = req.query;
        // Convert query parameters to appropriate formats
        const min = Number(minPrice) || 0; // Default to 0
        const max = Number(maxPrice) || 600000; // Default to no upper limit
        // Convert `categories` and `brands` to arrays if provided
        const categoryArray = categories ? categories.split(",") : [];
        const brandArray = brands ? brands.split(",") : [];

        // Build the query object
        const query = {
            price: { $gte: min, $lte: max },
        };

        // If a category is provided, filter by category
        if (category) {
            query.category = category;  // Filter by specific category if provided
        } else {
            // If categoryArray is provided, filter by multiple categories
            if (categoryArray.length > 0) {
                query.category = { $in: categoryArray };
            }
        }

        // If brandArray is provided, filter by multiple brands
        if (brandArray.length > 0) {
            query.brand = { $in: brandArray };
        }

        // Fetch products based on the constructed query
        const products = await Product.find(query);
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// create
router.post('/create', async (req, res) => {

    const category = await Category.findById(req.body.category);
    if(!category){
        return res.status(404).json("invalid category");
    }

    const limit = pLimit(2);
        const imagestoupload = req.body.images.map((image) => {
            return limit(async () => {
                const result = await cloudinary.uploader.upload(image);
                return result;
            })
        });
    
        const uploadstatus = await Promise.all(imagestoupload)
        const imgurl = uploadstatus.map((images) => {
            return images.secure_url
        })
        if (!uploadstatus) {
            return res.status(500).json({
                erroe: "images cannot uplaod",
                status: false
            })
        }

    
        let product = new Product({
            name: req.body.name,
            description: req.body.description,
            images: imgurl,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countinstock: req.body.countinstock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured
        });


    product =await product.save();
    
    if(!product){
        res.status(500).json({
            error :err,
            success : true
        })
    }
    res.status(201).json(product);
})

router.delete('/:id', async (req, res) => {
    const deleteuser = await Product.findByIdAndDelete(req.params.id);
    if (!deleteuser) {
        res.status(404).json({
            message: 'Product not found',
            success: false
        })
    }
    res.status(200).json({
        message: 'Product deleted',
        success: true
    })
})

router.get('/:id', async (req, res) => {
    const products = await Product.findById(req.params.id);
    if (!products) {
        return res.status(500).json({
            message: 'Category with given id not found',
        });
    }
    return res.status(200).send(products);
})

router.put('/:id', async (req, res) => {

    const limit = pLimit(2);
    const imagestoupload = req.body.images.map((image) => {
        return limit(async () => {
            const result = await cloudinary.uploader.upload(image);
            return result;
        })
    });


    const uploadstatus = await Promise.all(imagestoupload)

    const imgurl = uploadstatus.map((item) => {
        return item.secure_url
    })

    if (!uploadstatus) {
        return res.status(500).json({
            erroe: "images cannot uplaod",
            status: false
        })
    }

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            images: imgurl,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countinstock: req.body.countinstock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured

        }, 
        { new: true })

    if (!product) {
        return res.status(404).json({
            message: 'product with given id not found',
            success: false
        })
    }
    res.send(product);
});


module.exports = router;

