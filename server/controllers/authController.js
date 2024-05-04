const User = require("../models/user")
const { hashPassword, comparePassword } = require('../helpers/auth.js')
const jwt = require('jsonwebtoken')  

const test = (req, res) => {
    res.json('test is working')
}

// Register Endpoint
const registerUser = async (req, res) => {
    try {
        const {email, password, repeatpassword} = req.body;
        // check if name was entered

        const existingEmail = await User.findOne({email});
        if(existingEmail){
            return res.json({
                error: 'Email already exists'
            });
        }


        
        if(!email){
            return res.json({
                error: 'name is required'
            })
        };
        //check if password is good
        if(!password || password.length < 6)
            return res.json({
                error: 'Password is not enough'
            })
        else if(password !== repeatpassword){
            return res.json({
                error: 'Passwords do not match'
            })
        }

        const hashedPassword = await hashPassword(password)
        
        const user = await User.create({
            email, password: hashedPassword
        })

        return res.json(user)
    } catch (error) {
        console.log(error)
    }
}

//Login Endpoint
const loginUser = async (req, res) => {
    try {
        const {email, password} = req.body;

        // Check if username exists
        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'Email does not exist or incorrect'
            });
        }

        // Check if password match
        const match = await comparePassword(password, user.password)
        if(match){
            jwt.sign({email: user.email, id: user._id}, process.env.JWT_SECRET, {}, (err, token) =>{
                if(err) throw err;
            res.cookie('token', token).json(user)
            })
        } else{
            return res.json({
                error: 'Incorrect Password'
            })

        }
        
    } catch (error) {
        console.log(error)
    }
}


const getProfile = (req,res) => {
    const {token} = req.cookies
    if(token){
        jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) =>{
            if (err) throw err;
            res.json(user)
        })
    } else {
        res.json(null)
    }

}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}