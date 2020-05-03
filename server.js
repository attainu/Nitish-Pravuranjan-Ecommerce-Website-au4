const express = require('express');
const connectdb = require('./config/db');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();
const path = require('path');

connectdb();

//middlewares
app.use(express.json({ extended: false }));
app.use(cors());

//routes
app.use('/api/user', require('./api/user'));
app.use('/api/auth', require('./api/auth'));
app.use('/api/product', require('./api/product'));
app.use('/api/order', require('./api/order'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log('app listening on port:' + PORT);
});
