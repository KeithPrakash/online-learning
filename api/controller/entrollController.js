const Enrollment = require('../model/enrollments')
const Student = require('../model/students');
const Course =require('../model/course')


  const createEnrollment = async (req, res) => {
    try {
        const { studentId, courseId } = req.body;
        const student = await Student.findById(studentId);
        const course = await Course.findById(courseId);
        if (!student || !course) {
            return res.status(404).json({ message: 'Student or Course not found' });
        }
        const newEnrollment = new Enrollment({ student: studentId, course: courseId });
        const savedEnrollment = await newEnrollment.save();
        res.status(201).json(savedEnrollment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Get all enrollments
const getAllEnrollments= async (req, res) => {
    try {
        const enrollments = await Enrollment.find().populate('student').populate('course');
        res.status(200).json(enrollments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Get a single enrollment by ID
 const getEnrollmentById= async (req, res) => {
    try {
        const { id } = req.params;
        const enrollment = await Enrollment.findById(id).populate('student').populate('course');
        if (!enrollment) return res.status(404).json({ message: 'Enrollment not found' });
        res.status(200).json(enrollment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Update an enrollment by ID
 const updateEnrollment = async (req, res) => {
    try {
        const { id } = req.params;
        const { studentId, courseId } = req.body;
        const updatedEnrollment = await Enrollment.findByIdAndUpdate(
            id,
            { student: studentId, course: courseId },
            { new: true }
        ).populate('student').populate('course');
        if (!updatedEnrollment) return res.status(404).json({ message: 'Enrollment not found' });
        res.status(200).json(updatedEnrollment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// Delete an enrollment by ID
 const deleteEnrollment= async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEnrollment = await Enrollment.findByIdAndDelete(id);
        if (!deletedEnrollment) return res.status(404).json({ message: 'Enrollment not found' });
        res.status(200).json({ message: 'Enrollment deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


