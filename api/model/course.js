const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true, unique:true },
    description:{type: String, required: true, },

});



module.exports= mongoose.model('course',courseSchema);


