const { validationResult } = require('express-validator');
const db = require('../models');

let self = {}

self.save = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    try {
        const { content_comment_text } = req.body;
        await db?.comment?.create({
            content_comment_text: content_comment_text,
            user_id: req?.user?.data?.id,
            post_id: req?.params?.data?.id
        })

        res.status(201).json({ message: "Commant has successfully" })
    } catch (error) {
        res.status(500).json({
            message: "Error Comment Content",
            error: error.message
        });
    }
}

module.exports = self