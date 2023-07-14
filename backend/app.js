//require packages and import folders
const express = require("express");
const route = require("./routes/emproute")
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
const app = express();
app.use(express.json());


// call to routes
app.use(cookieParser());
app.use('/test', route)

//server run using listen function in express
dotenv.config({ path: 'config.env' })
const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is running ${port}`);
})