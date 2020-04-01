const express = require('express');
const connectdb = require('./config/db');

const PORT = process.env.PORT || 5000;
const app = express();

connectdb();

//middlewares
app.use(express.json({ extended: false }));

//routes
app.use('/user', require('./routes/user'));
app.use('/auth', require('./routes/auth'));

app.listen(PORT, () => {
  console.log('app listening on port:' + PORT);
});
