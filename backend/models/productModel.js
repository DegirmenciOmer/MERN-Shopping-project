import mongoose from 'mongoose';
//import { timestamp } from 'rxjs/operators';

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        requered: true
    },
    rating: {
        type: Number,
        requered: true
    },
    comment: {
        type: String,
        requered: true
    }, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
},  {
    timestamps: true
})

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        requered: true,
        ref: 'User'
    },
    name: {
        type: String,
        requered: true
    },
    image: {
        type: String,
        requered: true,
    },
    brand: {
        type: String,
        requered: true
    },
    category: {
        type: String,
        requered: true,
    },
    description: {
        type: String,
        requered: true,
    },
    reviews: [reviewSchema],
    rating: {
        type: Number,
        requered: true,
        default: 0
    },
    numReviews: {
        type: Number,
        requered: true,
        default: 0
    },
    price: {
        type: Number,
        requered: true,
        default: 0
    },
    countInStock: {
        type: Number,
        requered: true,
        default: 0
    },
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema);

export default Product;