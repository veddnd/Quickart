const Cart = require('../models/cart');
const express = require('express');
const router = express.Router();

router.get('/', async (request, resp) => {
    const cartlist = await Cart.find(request.query);
    if (!cartlist) {
        resp.status(500).json({ success: false });
    }
    resp.send(cartlist);
});
// delete

router.delete('/remove/:id', async (req, res) => {

    const cartitem = await Cart.findById(req.params.id);
    if (!cartitem) {
        return res.status(404).json({ message: 'No cart item found' });
    }
    const deleteitem = await Cart.findByIdAndDelete(req.params.id);
    if (!deleteitem) {
        res.status(404).json({
            message: 'item not found',
            success: false
        })
    }
    res.status(200).json({
        message: 'item deleted',
        success: true
    })
})

// post
router.post('/add', async (req, res) => {
    try {
        const { producttitle, image, price, quantity, total, productid, userid } = req.body;

        if (!productid || !userid) {
            return res.status(400).json({ error: 'Product ID and User ID are required.' });
        }

        let newCartItem = new Cart({
            producttitle:req.body.producttitle,
            image:req.body.image,
            price:req.body.price,
            quantity:req.body.quantity,
            total:req.body.total,
            productid:req.body.productid,
            userid:req.body.userid
        });

        newCartItem = await newCartItem.save();

        res.status(201).json({ message: 'Item added to cart!', cart: newCartItem });
    } catch (error) {
        console.error('Error adding to cart:', error);
        res.status(500).json({ error: `Failed to add item to cart: ${error.message}` });
    }
});

// put

router.put('/:id', async (req, res) => {

    const cartlist = await Cart.findByIdAndUpdate(
        req.params.id,
        {
            producttitle: req.body.producttitle,
            image: req.body.image,
            price: req.body.price,
            quantity: req.body.quantity,
            total: req.body.total,
            productid: req.body.productid,
            userid: req.body.userid
        },
        { new: true })

    if (!cartlist) {
        return res.status(404).json({
            message: 'Cart item with given id not found',
            success: false
        })
    }
    res.send(cartlist);
});


module.exports = router;
