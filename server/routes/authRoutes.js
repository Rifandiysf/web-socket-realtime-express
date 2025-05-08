const auth_ctrl = require('../controllers/auth_ctrl.js')
const { user } = require('../models')
const { body, param } = require('express-validator')
const bcrypt = require('bcryptjs')
const { authenticateJWT } = require('../middleware/authMiddleware.js')

module.exports = (app) => {
    const router = app.Router()
    const ValidationRegist = [
        body('firstName').notEmpty().withMessage('First name is required')
            .isString({ min: 6, max: 20 }).withMessage('First name must be a string'),
        body('lastName').notEmpty().withMessage('Last name is required')
            .isString({ min: 6, max: 20 }).withMessage('Last name must be a string'),
        body('username').notEmpty().withMessage('Last name is required')
            .isString({ min: 6, max: 20 }).withMessage('Last name must be a string')
            .custom(async(value) => {
                let UserNameCheck = await user.findOne({
                    where: {
                        username: value
                    }
                })
                if(!!UserNameCheck) {
                    throw new Error('Username already exists')
                }
            }),
        body('email').notEmpty().withMessage('Last name is required')
            .isEmail().withMessage('Last name must be a string')
            .custom(async(value) => {
                let UserNameCheck = await user.findOne({
                    where: {
                        email: value
                    }
                })
                if(!!UserNameCheck) {
                    throw new Error('Email already exists')
                }
            }),
        body('classes').notEmpty().withMessage('Class is required')
            .isIn(['X', 'XI', 'XII']).withMessage('Class must be one of: X, XI, XII'),
        body('gender').notEmpty().withMessage('Gender is required')
            .isIn(['M', 'F']).withMessage('Gender must be either M or F'),
        body('major_id').notEmpty().withMessage('Major ID is required')
            .isInt({ min: 1 }).withMessage('Major ID must be a positive integer'),
        body('password').notEmpty().withMessage('Last name is required')
            .isString({ min: 6, max: 100 }).withMessage('Last name must be a string'),
    ];

    const ValidationLogin = [
        body('username').notEmpty().withMessage('Last name is required')
            .isString({ min: 6, max: 20 }).withMessage('Last name must be a string')
            .custom(async(value) => {
                let UserNameCheck = await user.findOne({
                    where: {
                        username: value
                    }
                })
                if(!!UserNameCheck == false) {
                    throw new Error('Username Not Registered')
                }
            }),
        body('password').notEmpty().withMessage('Last name is required')
            .isString({ min: 6, max: 100 }).withMessage('Last name must be a string'),
    ]

    router.post('/register', ValidationRegist, auth_ctrl.save)
    router.post('/login', ValidationLogin, auth_ctrl.login )
    router.get('/me', authenticateJWT, (req, res) => {
        res.status(200).json({
            message: "Token Is Valid",
            data: req.user
        })
    })

    return router
}