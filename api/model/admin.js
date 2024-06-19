const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
    username: { type: String, required: true, },
    email:{type: String, required: true, unique: true},
    address:{type: String, },
    tel:{type:String},
    password: { type: String, required: true },
    role: { type: String, default: 'admin', enum: ['admin'] } // Add role field
});

adminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

module.exports= mongoose.model('admin',adminSchema);
  // Create separate model for Admin

