const bcrypt=require("bcrypt")
const saltrounds=10;
exports.hashGenerate=async (plainPassword)=>{
    try{
        const salt=await bcrypt.genSalt(saltrounds);
        const hash=await bcrypt.hash(plainPassword,salt)
        return hash;
    }catch(error){
        return error;
    }
    
}
exports.hashValidator=async (plainPassword,hashpassword)=>{
    const result=await bcrypt.compare(plainPassword,hashpassword)
    return result;
}
//module.exports={hashGenerate}