const mongoose = require('mongoose')
const {Schema} = mongoose;

const cartSchema = new Schema({
    items: [{
        name: String,
        price: Number,
        quantity: Number,
    }],
    totalPrice: Number,
})

const userSchema = new Schema({
    email: String,
    password: String,
    cart: cartSchema
})


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;