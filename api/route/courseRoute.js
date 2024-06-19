const express =require('express')
const courseController =require('../controller/courseController')
const {authenticate ,authorize} = require('../middleware/authMiddle') 
const router =express.Router();


router.post('/save', authenticate,authorize(['admin']),  courseController.createCourse);
router.patch('/update',authenticate,authorize(['admin']),   courseController.updateCourse);
router.delete('/delete/:id', authenticate,authorize(['admin']), courseController.deleteCourse);
router.get('/getAll',courseController.getAllCourses);


module.exports=router;