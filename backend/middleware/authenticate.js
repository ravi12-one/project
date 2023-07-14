const jwt = require('jsonwebtoken')
// const { Route } from 'react-router-dom';
const Employ = require("../models/empschema");

const Authenticate = async (req, res, next) => {
try {
    const token = req.cookies.jwttoken;
    const verifytoken = jwt.verify(token,process.env.SECRET_KEY);
    const rootempl = await Employ.findOne({_id: verifytoken._id, "TOKENS.token": token})
    if(!rootempl){
        throw new Error('User not found');
    }
    req.token = token;
    req.rootempl = rootempl
    req.EmpId = rootempl._id;
    next(); 


} catch (e){
    res.status(401).send("Unauthorized: Need to authentication")
    console.log(e);
}

}


module.exports = Authenticate