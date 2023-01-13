const { User } = require('../models/User')
const express = require('express');
const route = express.Router();
const { hashValidator } = require('../helpers/hashing')
const { tokenGenerator } = require('../helpers/token')
const authVerify = require("../helpers/authVerify")
route
    .get('/', (req, res) => {
        console.log(req)
        res.send("Welcome to Login Page")
    })
    .post('/', async (req, res) => {
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).json({ "message": "Please add all fields" });
            //throw new Error('Please add all fields');
        }
        try {
            const existingUser = await User.findOne({ email: email });
            //console.log(existingUser)
            if (!existingUser) {
                res.status(204).json({ "message": "user not found" })
                return res.status(204)
            } else {
                const checkUser = await hashValidator(password, existingUser.password)
                if (!checkUser) {
                    res.status(400).json({ "message": "Invalid Passowrd" })
                } else {
                    const token = await tokenGenerator(existingUser.email)
                    console.log(token)
                    //res.cookie("jwt", token);
                   // console.log(existingUser)
                    res.status(201)
                        .cookie('token', token)
                        .json({
                            success: true,
                            token,
                            existingUser
                        })

                }
            }
        } catch (err) {
            res.send(err)
        }


    })
// route.get("/auth",(req,res)=>{
//     console.log(req.body)
//     res.send(req.body)
// })
module.exports = route