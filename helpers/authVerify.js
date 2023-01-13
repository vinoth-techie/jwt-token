const {tokenValidator}=require("./token")
module.exports=async (req,res,next)=>{
    const {jwt}=req.cookies;
    const valid=await tokenValidator(jwt);
    if(valid){
        next()
    }else{
        res.send("Kindly login")
    }
}