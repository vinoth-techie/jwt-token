const express = require('express')
const route = express.Router()
const {User}=require('../models/User')
route.get('/',async (req,res)=>{
    User.find((err,val)=>{
        if(err){
            res.send(err)
        }else{
            res.send(val)
        }
    })
})
module.exports=route;
