require("dotenv").config(); // .env ko load karne ke liye  
const mongoose = require('mongoose')
const URI = process.env.MONGO_URI

const dbConnection = async () => {

 try {
  await mongoose.connect(URI, {autoIndex : false});

  console.log('Database Connection SucessFul');
  
 }
  catch (error) {
  console.log('Database Connection Error', error);
  process.exit(1); // Process ko exit kar do agar DB connect na ho
  
 }
}

module.exports = {dbConnection}