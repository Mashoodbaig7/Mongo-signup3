const { model } = require('../models/signUpSchema');

const signUp = async (req, res, next) => {  // 👈 Function ko async banaya
  try {
    let { name, email, password, address } = req.body;
    
    let emailRegex = /^[a-zA-Z0-9._%+-]{4,}@(gmail\.com|yahoo\.com|outlook\.com)$/; // Email Regex

    // 1. Check if all fields 
    if (!name || !email || !password || !address) {
      return res.status(400).json({ serverMsg: "All Fields Are Required" });
    }

    // 2. Check name 
    if (name.length < 4) {
      return res.status(400).send("Name must be at least 4 characters");
    }

     // 3. Check Email 
    if (!emailRegex.test(email)) {
      return res.status(400).send("Invalid Email Format");
    }

    // 4. Check Pass 
    if (password.length < 6) {
      return res.status(400).send("Password must be at least 6 characters");
    }

     // 5. Check Adress 
    if (address.length < 7) {
      return res.status(400).send("Address must be at least 7 characters");
    }

    // 6. Check if Email Already Exists in Database**
    let emailExist = await model.findOne({ email });  //  Await use kiya ye aik promis Return krta ha ais

    console.log("Email Exist",emailExist);
    
    if (emailExist) {
      return res.status(400).send("This Email is Already Registered");
    }

    // **7. If all validations pass, move to The Controller**
    next();

  }
   catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { signUp };
