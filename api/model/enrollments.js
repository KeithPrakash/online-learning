const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const entrollmentSchema = new mongoose.Schema({
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Reference to the User
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    enrollmentDate: { type: Date, default: Date.now }
});


module.exports= mongoose.model('enroll',entrollmentSchema);