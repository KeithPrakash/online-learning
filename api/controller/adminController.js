const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const  adminSchema =require('../model/admin')
const jwt = require('jsonwebtoken');


const register  =async (req,res)=>{
    try {
              
        const { username, password ,tel,address,email} = req.body;
        const exists = await adminSchema.findOne({ email });

        if(exists){

            res.status(401).json({ message:"Invalid email"})
        }
        const user = new adminSchema({
            email: email,
            password: password,
            username: username,
            tel:tel,
            address:address
          });
         

         user.save();

        res.status(200).json({message:"user created"})
    } catch (err) {
      console.log(err);
    }
}

const login = async (req,res)=>{


const { email, password } = req.body;

try {

    let user;
    user = await adminSchema.findOne({ email }); // First try student collection
   
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign({ userId: user._id, role: user.role }, process.env.SECRET_KEY, { expiresIn: '1h' }); // Use a more secure key in production
    // Login successful (code to generate session or token, with user type information)
    res.status(200).json({ token});
} catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
}
}
module.exports={
    login ,register
}