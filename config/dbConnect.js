const mongoose=require('mongoose')
const dotenv=require("dotenv")
dotenv.config()
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL)
    .then(()=>{
        console.log('Connected to Database')
        console.log("pr request")
        dfwjfijmfin
    })
    .catch((err)=>{
        console.log('no connection')
    })

// module.exports=mongoose
