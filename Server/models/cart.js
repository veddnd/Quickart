const mongoose = require('mongoose');

// Define the Cart schema
const cartSchema = new mongoose.Schema({
    producttitle: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, default: 1 },
    total: { type: Number, required: true },
    productid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
    userid: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
});

// Add a virtual field for 'id' (optional)
cartSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialized
cartSchema.set('toJSON', {
    virtuals: true,
});

// Export the Cart model
module.exports = mongoose.model('Cart', cartSchema);
