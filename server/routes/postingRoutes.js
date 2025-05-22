const { body } = require("express-validator")
const { authenticateJWT } = require('../middleware/authMiddleware.js')
const posting_ctrl = require('../controllers/posting_ctrl.js')

module.exports = (app) => {
    const router = app.Router()
    const Validation = [
        body('content_text').notEmpty()
    ]

    router.get('/list', authenticateJWT, posting_ctrl.list)
    router.post('/create', authenticateJWT, Validation, posting_ctrl.save) 

    return router
}