const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({ path: 'config.env' })
var DB = process.env.DATA
mongoose.set("strictQuery", false);
mongoose.connect(DB).then(()=>{
    console.log("DB connectivity success")
}).catch((e)=>{
    console.log(e)
})