const db = require('../models');

module.exports = (app) => {
    const router = app.Router()

    router.get('/major', async (res, req) => {
        const majorData = await db.major.findAll({
            attributes: ["id", "name"]
        })

        return res.status(200).json({
            message: 'Major data founded',
            data: majorData
        })
    })

    return router
}