const {model} = require('../models/signUpSchema')


const signUp = async (req, res) => {
    let {name, email, password, address} = req.body

    try {
       let userAdd = new model({
        name,
        email,
        password,
        address
       }
    )
    
    console.log("UserAddReturn",userAdd);

     await userAdd.save()

     res.status(200).json({serverMsg : "SignUp SucessFull", user : userAdd})
    
    } catch (error) {
        console.log('error', error);
        
    }

}

module.exports ={signUp}