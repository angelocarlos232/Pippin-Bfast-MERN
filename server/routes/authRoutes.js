const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registerUser, loginUser, getProfile} = require('../controllers/authController')
const Cart = require('../models/user');
//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:3000'
    }
)
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', (req, res) => {
  // Clear the token cookie
  res.clearCookie('token').json({ message: 'Logged out successfully' });
});
router.get('/profile', getProfile)


router.post('/cart', async (req, res) => {
  try {
    // Extract the selected items from the request body
    const { items } = req.body;

    const cart = await Cart.create({
      items
    })
    return res.json(cart)



    res.status(200).json(savedCart);
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error adding items to cart:', error);
    res.status(500).json({ error: 'Failed to add items to cart. Please try again later.' });
  }
});

module.exports = router