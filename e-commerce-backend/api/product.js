const router = require('express').Router();
const User = require('../models/User');
const Product = require('../models/Product');
const Category = require('../models/Category');
const auth = require('../config/middlewares/auth');
// route: get /api/product
// desc: GET all products
// access: public
router.get('/', async (req, res) => {
  try {
    let product = await Product.find().sort({ date: -1 });
    res.json(product);
  } catch (error) {
    console.log('error', error.message);
    res.status(500).send('server error');
  }
});

// route: post /api/product
// desc: Post a product
// access: private
router.post('/', auth, async (req, res) => {
  try {
    let { name, description, productPic, category, price, stock } = req.body;
    category = category.toLowerCase();
    let categoryId = null;
    let productCategory = await Category.findOne({ name: category });
    if (!productCategory) {
      productCategory = new Category({
        name: category,
      });
      await productCategory.save();
    }
    categoryId = productCategory.id;
    let product = await Product.findOne({
      name,
      description,
      price,
      stock,
      categoryId,
    });
    if (product) {
      return res.send({ msg: 'product already exists!' });
    }
    product = new Product({
      name,
      description,
      productPic,
      price,
      stock,
      categoryId,
    });
    await product.save();
    res.json(product);
  } catch (error) {
    console.log('error', error.message);
    res.status(500).send('server error');
  }
});

// route: put /api/product/:productId/reviews
// desc: post a review
// access: private
router.put('/:productId/reviews', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  const product = await Product.findById(req.params.productId);

  let newReview = {
    user: req.user.id,
    text: req.body.text,
    name: user.name,
  };
  product.reviews.push(newReview);
  await product.save();

  res.json(product.reviews);
});

// route: put /api/product/:productId/reviews/:reviewId
// desc: delete a review
// access: private

router.delete('/:productId/reviews/:reviewId', auth, async (req, res) => {
  const product = await Product.findById(req.params.productId);

  const review = product.reviews.find(
    (review) => review.id === req.params.reviewId
  );

  //Check if user exists
  if (!review) {
    return res.status(404).json({ msg: 'Review does not exist' });
  }

  //Check if user is authorized
  if (review.user.toString() !== req.user.id) {
    return res.status(401).json({ msg: 'User not authorized' });
  }

  product.reviews = product.reviews.filter(
    ({ id }) => id !== req.params.reviewId
  );

  await product.save();

  return res.json(product.reviews);
});

module.exports = router;
