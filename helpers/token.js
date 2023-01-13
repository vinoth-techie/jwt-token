const jwt = require("jsonwebtoken")

exports.tokenGenerator = async (email) => {
    try {
        const token = await jwt.sign({email:email}, process.env.JWT_KEY, { expiresIn: "4hours" })
        //console.log(token)
        return token;
    } catch (err) {
        return err;
    }

}
exports.tokenValidator = async (token) => {
    try {
        const data = await jwt.verify(token, process.env.JWT_KEY)
        return data;
    } catch (error) {
        return false;
    }
}