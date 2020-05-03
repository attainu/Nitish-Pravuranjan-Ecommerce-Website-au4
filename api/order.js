const router = require('express').Router();
const Order = require('../models/Order');
const auth = require('../config/middlewares/auth');

// route: get /api/order
// desc: GET all orders
// access: private
router.get('/', auth, async (req, res) => {
  try {
    let order = await Order.find({ userId: req.user.id }).sort({ date: -1 });
    res.json(order);
  } catch (error) {
    console.log('error', error.message);
    res.status(500).send('server error');
  }
});
// route: post /api/order
// desc: post an order
// access: private
router.post('/', auth, async (req, res) => {
  try {
    let { cartItems, paymentID, paymentStatus } = req.body;
    let order = await Order.findOne({ paymentID });
    if (!order) {
      order = new Order({
        userId: req.user.id,
        paymentID,
        cartItems,
        paymentStatus,
      });
      await order.save();
      return res.json(order);
    }
    res.send({ msg: 'Order already exists!' });
  } catch (error) {
    console.log('error', error.message);
    res.status(500).send('server error');
  }
});

module.exports = router;
