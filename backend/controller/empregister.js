require("../DB/dbconfig");
const EmpDB = require("../models/empschema");
const jwt = require('jsonwebtoken')

//functions
const registerpost = async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(422).json({ error: "Field properly" })
    }
    try {
        const userexist = await EmpDB.findOne({ email: email })
        
        if (userexist) {
            return res.status(422).json({ error: "Email already registered" })
        }else{
            const emp = new EmpDB({ name, email, password });
            const token = await emp.generateAuthToken();
            res.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 2556300),
                httpOnly:true
            })
            console.log(token);
            const empregister = await emp.save()
            res.status(201).json({ message: "user Registered successfully" });
        
        }
        
        
    }
    catch (e) {
        res.status("ERROR :" + e);
    }

}

//exports
module.exports = {
    registerpost,
}