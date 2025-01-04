const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();
const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2;
const Newarrivals = require('../models/newarrivals');

router.get("/", async (req, res) => {
    try {
        const { minPrice, maxPrice, categories, brands } = req.query;
        const min = Number(minPrice) || 0; // Default to 0
        const max = Number(maxPrice) || 600000; // Default to no upper limit
        // Convert categories and brands to arrays if provided
        const categoryArray = categories ? categories.split(",") : [];
        const brandArray = brands ? brands.split(",") : [];
        // Build the query object
        const query = {
            price: { $gte: min, $lte: max },
        };
        if (categoryArray.length > 0) {
            query.category = { $in: categoryArray };
        }
        if (brandArray.length > 0) {
            query.brand = { $in: brandArray };
        }
        const newarrival = await Newarrivals.find(query);
        res.status(200).json(newarrival);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});


// create
router.post('/create', async (req, res) => {
    try {
        const category = await Category.findById(req.body.category);
        if (!category) {
            return res.status(404).json({ error: "Invalid category" });
        }

        const limit = pLimit(2);
        const imagestoupload = req.body.images.map((image) => {
            return limit(async () => {
                try {
                    const result = await cloudinary.uploader.upload(image);
                    return result;
                } catch (uploadError) {
                    throw new Error("Image upload failed");
                }
            });
        });

        const uploadstatus = await Promise.all(imagestoupload).catch((err) => {
            return res.status(500).json({ error: "Image upload failed", details: err.message });
        });

        if (!uploadstatus) {
            return res.status(500).json({ error: "Images could not be uploaded" });
        }

        const imgurl = uploadstatus.map((images) => images.secure_url);

        const newarrival = new Newarrivals({
            name: req.body.name,
            description: req.body.description,
            images: imgurl,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countinstock: req.body.countinstock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        });

        const savedArrival = await newarrival.save();
        res.status(201).json(savedArrival);
    } catch (error) {
        console.error("Error creating product:", error.message);
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});

router.get('/:id', async (req, res) => {
    const products = await Newarrivals.findById(req.params.id);
    if (!products) {
        return res.status(500).json({
            message: 'Category with given id not found',
        });
    }
    return res.status(200).send(products);
})



router.delete('/:id', async (req, res) => {
    const deleteuser = await Newarrivals.findByIdAndDelete(req.params.id);
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
    const newarrival = await Newarrivals.findByIdAndUpdate(
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

    if (!newarrival) {
        return res.status(404).json({
            message: 'product with given id not found',
            success: false
        })
    }
    res.send(newarrival);
});


module.exports = router;