const express = require('express')
const loginroute = express.Router();
const user = require('../models/mongodb');
const { body, validationResult } = require('express-validator');
loginroute.post('/loginroute',
    [
        body('name', 'minimum size 6').isLength({ min: 6 }),
        body('password', 'minimum size 6').isLength({ min: 6 })
    ]
    , async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        let name = req.body.name;
        try {
            const data = await user.findOne({ name })
            if (!data) {
                return res.json({ success: "youdonot" })
            } 
            if (data.password !== req.body.password) {
               
                return res.json({ success: "passwordwrong" })
            }
            else {
                res.json({ success: true })
            }
            
           
        }
        catch (error) {
            console.log(error.message);
            console.log(res);
            res.json({ success: false });
        }
    })
module.exports = loginroute;