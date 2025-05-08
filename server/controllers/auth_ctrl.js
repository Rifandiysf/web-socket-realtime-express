const { validationResult } = require('express-validator');
const db = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const { where } = require('sequelize');

let self = {}

self.save = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const { firstName, lastName, username, email, classes, gender, major_id, password } = req.body;
        const hashPassword = await bcryptjs.hash(password, 10)
        const UserData = await db.user.create({
            username: username,
            email: email,
            password: hashPassword
        })

        const StudentData = await db.student.create({
            firstName: firstName,
            lastName: lastName,
            classes: classes,
            gender: gender,
            major_id: major_id
        });

        const roleStudent = await db.roles.findOne({
            attributes: ["id"],
            where: {
                name: "Student"
            }
        })

        await db.role_user.create({
            user_id: UserData.id,
            role_id: roleStudent.id
        })

        await db.student_user.create({
            user_id: UserData.id,
            student_id: StudentData.id
        })

        res.status(201).json({ message: "Register has successfully" })
    } catch (error) {
        res.status(500).json({
            message: "Error adding student",
            error: error.message
        });
    }
}

self.login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        const { username, password } = req.body
        const userData = await db.user.findOne({
            include: [
                { model: db.roles,
                    attributes: ['id']
                 },
                { model: db.student }
            ],
            where: {
                username: username
            },
            attributes: ["id", "username", "email", "password"]
        })

        let isCorrectPass = await bcrypt.compare(password, userData.password)
        if(!isCorrectPass) {
            return res.status(401).json({
                message: "Invalid password"
            })
        }

        const option = {
            expiresIn: '24h'
        }
        const secret = 'asdfghjklpoiuytrewqzxcvbnm'
        const token = jwt.sign({
            id: userData.id,
            username: userData.username,
            email: userData.email,
            firstName: userData.students[0].firstName,
            lastName: userData.students[0].lastName,
            classes: userData.students[0].classes,
            gender: userData.students[0].gender,
            roles: userData.roles[0].name,
        }, secret, option)

        res.status(200).json({
            message: "Login Success",
            data: token
        })
    } catch (error) {
        res.status(500).json({
            message: "Invalid Login",
            error: error.message
        });
    }
}

module.exports = self