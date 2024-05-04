const mongoose = require('mongoose')
const {Schema} = mongoose;




const userSchema = new Schema({
    email: String,
    password: String,
})




const userModel = mongoose.model('User', userSchema);

module.exports = userModel;