require("../DB/dbconfig");
const EmpDB = require("../models/empschema");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const sign = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Field the data" })
        }
        const emplogin = await EmpDB.findOne({ email: email })
        if (emplogin) {
            const passmatch = await bcrypt.compare(password, emplogin.password)
            const token = await emplogin.generateAuthToken();
            res.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 2556300),
                httpOnly:true
            })
            if (passmatch) {
                res.status(200).json(emplogin.role);
            }
            else {
                throw res.status(400).json({ error: "Invalid Credss" })
            }
        }else {
            throw res.status(400).json({ error: "Invalid Creds" })
        }
    }
    catch (e) {
        console.log({ error: "ERROR" + e })
    }
    // res.status(200).json({message: req.body});
}
module.exports = {
    sign,
}