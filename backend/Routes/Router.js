const express = require('express')
const router = express.Router();
const user = require('../models/mongodb');
const { body, validationResult } = require('express-validator');
router.post('/mongodb',
    [
        body('name', 'minimum size 6').isLength({ min: 6 }),
        body('firstname', 'minimum size 6').isLength({ min: 6 }),
        body('lastname', 'minimum size 6').isLength({ min: 6 }),
        body('email', 'minimum size 6').isLength({ min: 6 }),
        body('password', 'minimum size 6').isLength({ min: 6 })
    ]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        try {
            const name = req.body.name;
            const data = await user.findOne({ name });
            console.log("yes it is found")
            if (!data) {
                await user.create({
                    name: req.body.name,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    email: req.body.email,
                    password: req.body.password
                })
                console.log(res);
                res.json({ success: true })
            }
            else{
                res.json({success:"already there"})
            }

        }
        catch (error) {
            console.log(error.message);
            console.log(res);
            res.json({ success: false });
        }
    })
module.exports = router;