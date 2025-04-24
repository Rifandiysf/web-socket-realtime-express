const { validationResult } = require('express-validator');
const db = require('../models');

let self = {}

self.read = async (req, res) => {
    try {
        const students = await db.student.findAll();
        res.status(200).json({
            message: "Students fetched successfully",
            data: students
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching students",
            error: error.message
        });
    }
}


self.readByID = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const student = await db.student.findByPk(req.params.id);
        
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }
        
        res.status(200).json({
            message: "Student details fetched successfully",
            data: student
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching student details",
            error: error.message
        });
    }
}

self.create = async(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const { firstName, lastName, classes, gender, major_id } = req.body;
        const newStudent = await db.student.create({
            firstName,
            lastName,
            classes,
            gender,
            major_id
        });
        
        res.status(201).json({
            message: "Student added successfully",
            data: newStudent
        });
    } catch (error) {
        res.status(500).json({
            message: "Error adding student",
            error: error.message
        });
    }
}


self.update = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const { id } = req.params;
        const { firstName, lastName, classes, gender, major_id } = req.body;
        
        const student = await db.student.findByPk(id);
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }
        
        await student.update({
            firstName,
            lastName,
            classes,
            gender,
            major_id
        });
        
        res.status(200).json({
            message: "Student updated successfully",
            data: student
        });
    } catch (error) {
        res.status(500).json({
            message: "Error updating student",
            error: error.message
        });
    }
}

self.delete = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const { id } = req.params;
        
        const student = await db.student.findByPk(id);
        if (!student) {
            return res.status(404).json({
                message: "Student not found"
            });
        }
        
        await student.destroy();
        
        res.status(200).json({
            message: "Student deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting student",
            error: error.message
        });
    }
}

module.exports = self