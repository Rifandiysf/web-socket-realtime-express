const { body } = require("express-validator")
const { authenticateJWT } = require('../middleware/authMiddleware.js')
const comment_ctrl = require('../controllers/comment_ctrl.js')
const db = require("../models")

module.exports = (app) => {
    const router = app.Router()
    const Validation = [
        body('content_comment_text').notEmpty()
    ]

    router.post('/create', authenticateJWT, Validation, comment_ctrl.save) 
    router.get('/list', authenticateJWT, async (_, res) => {
        let data = await db?.comment?.findAll({
            include: {
                model: db?.user,
                attributes: ["username"]
            }
        })
        res.status(200).json({
            message: 'comment is found',
            data: data
        })
    })

    return router
}