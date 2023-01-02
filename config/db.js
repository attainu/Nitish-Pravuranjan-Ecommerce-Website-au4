const mongoose = require('mongoose');
require('dotenv').config();
const db = process.env.MONGO_URI;

const connectdb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });

    console.log('mongodb connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectdb;
