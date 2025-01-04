const { Category } = require('../models/category');
const express = require('express');
const router = express.Router();
const pLimit = require('p-limit');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.cloudinary_Config_Cloud_Name,
    api_key: process.env.cloudinary_Config_api_key,
    api_secret: process.env.cloudinary_Config_api_secret,
});
router.get('/', async (request, resp) => {
    const categorylist = await Category.find();
    if (!categorylist) {
        resp.status(500).json({ success: false });
    }
    resp.send(categorylist);
});

router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) {
        return res.status(500).json({
            message: 'Category with given id not found',
        });
    }
    return res.status(200).send(category);
})

// delete

router.delete('/:id', async (req, res) => {
    const deleteuser = await Category.findByIdAndDelete(req.params.id);
    if (!deleteuser) {
        res.status(404).json({
            message: 'category not found',
            success: false
        })
    }
    res.status(200).json({
        message: 'category deleted',
        success: true
    })
})

// post
router.post('/create', async (req, res) => {
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

    let category = new Category({
        name: req.body.name,
        images: imgurl,
        color: req.body.color
    });

    if (!category) {
        res.status(500).json({
            error: err,
            success: false
        })
    }
    category = await category.save();
    res.status(201).json(category);
});

// put

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

    const category = await Category.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            images: imgurl,
            color: req.body.color
        }, 
        { new: true })

    if (!category) {
        return res.status(404).json({
            message: 'Category with given id not found',
            success: false
        })
    }
    res.send(category);
});


module.exports = router;
