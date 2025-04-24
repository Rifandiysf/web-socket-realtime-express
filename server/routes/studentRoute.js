const student_ctrl = require('../controllers/student_ctrl.js')
const { body, param } = require('express-validator')

module.exports = (app) => {
    const router = app.Router()
    const Validation = [
        body('firstName').notEmpty().withMessage('First name is required')
            .isString().withMessage('First name must be a string'),
        body('lastName').notEmpty().withMessage('Last name is required')
            .isString().withMessage('Last name must be a string'),
        body('classes').notEmpty().withMessage('Class is required')
            .isIn(['X', 'XI', 'XII']).withMessage('Class must be one of: X, XI, XII'),
        body('gender').notEmpty().withMessage('Gender is required')
            .isIn(['M', 'F']).withMessage('Gender must be either M or F'),
        body('major_id').notEmpty().withMessage('Major ID is required')
            .isInt({ min: 1 }).withMessage('Major ID must be a positive integer')
    ];
    const idValidation = param('id').isInt().withMessage('ID must be an integer');

    router.get('/', student_ctrl.read)
    router.get('/:id', [idValidation],student_ctrl.detail)
    router.post('/', [Validation] ,student_ctrl.create)
    router.put('/:id', [Validation,idValidation],student_ctrl.update)
    router.delete('/:id', [idValidation],student_ctrl.delete)

    return router
}