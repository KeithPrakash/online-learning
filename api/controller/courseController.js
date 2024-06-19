
const express = require('express');
const mongoose = require('mongoose');
const Course = require('../model/course'); // Adjust the path as necessary


    // Create a new course
    const createCourse= async (req, res) => {
        try {
            const { name, description} = req.body;
             const unit =  await Course.findOne({name})
          
             if(unit){
                res.json({message:"already exits"})
                return
             }
            const newCourse = new Course({ name, description });
            const savedCourse = await newCourse.save();
            res.status(201).json('created');
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
    // Get all courses
   const getAllCourses= async (req, res) => {
        try {
            const courses = await Course.find();
            res.status(200).json(courses);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Get a single course by ID
   const   getCourseById = async (req, res) => {
        try {
            const { id } = req.params;
            const course = await Course.findById(id);
            if (!course) return res.status(404).json({ message: 'Course not found' });
            res.status(200).json(course);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Update a course by ID
   const updateCourse= async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, address } = req.body;
            const updatedCourse = await Course.findByIdAndUpdate(id, { name, description }, { new: true });
            if (!updatedCourse) return res.status(404).json({ message: 'Course not found' });
            res.status(200).json(updatedCourse);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    // Delete a course by ID
 const deleteCourse= async (req, res) => {
        try {
            const { id } = req.params;
            const deletedCourse = await Course.findByIdAndDelete(id);
            if (!deletedCourse) return res.status(404).json({ message: 'Course not found' });
            res.status(200).json({ message: 'Course deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

module.exports={
    createCourse ,getAllCourses ,getCourseById,updateCourse,deleteCourse
}