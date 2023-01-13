const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    userid:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
    username:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    phoneno:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10
    },
    userrole:{
        type:String,
        required:true,
        minlength:5,
        maxlength:50
    }
})

const User=mongoose.model('User',UserSchema)
module.exports={User}