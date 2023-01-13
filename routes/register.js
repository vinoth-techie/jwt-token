const express = require('express')
const route = express.Router()
const { User } = require('../models/User')
const asyncHandler = require('express-async-handler');
const { hashGenerate } = require('../helpers/hashing')
route
    .get('/', (req, res) => {
        res.send("Welcome to Register page")
        console.log("Welcome to Register page")
    })
    .post('/', async (req, res) => {
        try {
            const hashpassword = await hashGenerate(req.body.password)
            // if (!req.body.email || !req.body.username || !req.body.password) {
            //     res.status(400);
            //     throw new Error('Please add all fields');
            // }

            let user = new User({
                userid: req.body.userid,
                username: req.body.username,
                email: req.body.email,
                password: hashpassword,
                phoneno: req.body.phoneno,
                userrole: req.body.userrole

            });
            user = await user.save();

            res.send(user);

        } catch (err) {
            res.send(err)
        }

    })

route.route('/hello')
    .get((req, res) => {
        res.send("Welcome to Register page")
        console.log("Welcome to Register page")
    })
    .post((req, res) => {
        console.log(req)
        console.log("Welcome to Register page")
    })


module.exports = route