const router = require('express').Router()
const empregister = require("../controller/empregister")
const signin = require("../controller/empsign");
const EmpDB = require("../models/empschema");

//emp register
router.post('/register',empregister.registerpost);
//logout
router.get('/logout', (req,res) => {
    res.clearCookie('jwttoken',{ path: '/' });
    console.log(clear)
    res.statusCode(200).send("user logout")

})
// get
router.get('/admin',async (req,res)=>{
    const emplogin =  await EmpDB.find()
    res.json(emplogin);
})


router.post('/signin',signin.sign)
module.exports = router
