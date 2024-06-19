const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const studentSchema = new mongoose.Schema({
    username: { type: String, required: true, },
    email:{type: String, required: true, unique: true},
    address:{type: String,required:false },
    tel:{type:String ,required:false },
    password: { type: String, required: true },
    role: { type: String, default: 'student', enum: ['student'] } // Add role field
});
studentSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

module.exports= mongoose.model('student',studentSchema);