const { validationResult } = require('express-validator');
const db = require('../models');

let self = {}

self.save = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const { content_text } = req.body;
        await db?.post?.create({
            content_text: content_text,
            private: "FALSE",
            user_id: req?.user?.data?.id
        })

        res.status(201).json({ message: "Posting has successfully" })
    } catch (error) {
        res.status(500).json({
            message: "Error Posting Content",
            error: error.message
        });
    }
}

self.list = async (_, res) => {
    let data = await db?.post?.findAll({
        include: [{
            model: db?.user,
            attributes: ["username"]
        },{
            model: db?.comment,
            include: [{
                model: db?.user
            }
            ]
        },
        ]
    })
    res.status(200).json({
        message: 'posts id found',
        data: data
    })
}

module.exports = self