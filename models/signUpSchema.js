const mongoose = require('mongoose')

const URI = "mongodb+srv://Mashood:<db_password>@cluster0.5xfkn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(URI, { autoIndex: false } )

 let schema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    address : String,
 })

 let model = mongoose.model('Users', schema)


module.exports = {model}




