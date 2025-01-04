const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    images: [{
        type: [String],
        required: true
    }] ,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    countinstock: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    numReviews: {
        type: Number,
        default: 0
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }

})
// productSchema.virtual('id').get(function(){
//     return this._id.toHexString();
// });
// productSchema.set('toJSON',{
//     virtuals:true,
// });

exports.Product = mongoose.model('Product', productSchema);
// exports.productSchema=productSchema;