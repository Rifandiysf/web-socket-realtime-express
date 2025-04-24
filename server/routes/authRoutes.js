const auth_ctrl = require('../controllers/auth_ctrl.js')

module.exports = (app) => {
    const router = app.Router()

    router.post('/register', auth_ctrl.save)

    return router
}