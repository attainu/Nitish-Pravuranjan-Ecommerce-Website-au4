const express = require('express');
const connectdb = require('./config/db');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const app = express();

connectdb();

//middlewares
app.use(express.json({ extended: false }));
app.use(cors());

//routes
app.use('/api/user', require('./api/user'));
app.use('/api/auth', require('./api/auth'));
app.use('/api/product', require('./api/product'));

app.listen(PORT, () => {
  console.log('app listening on port:' + PORT);
});
