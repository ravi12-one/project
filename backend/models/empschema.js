const mongoose = require('mongoose');
const hash = require('bcryptjs')
const jwt = require('jsonwebtoken');
const empschema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type:String
    },
    TOKENS: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

})

// Hashing function
empschema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await hash.hash(this.password, 12);
    }
    next();
})
empschema.methods.generateAuthToken = async function (){
    try{
        let jwttoken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.TOKENS = this.TOKENS.concat({ token: jwttoken });
        await this.save();
        return jwttoken;
    } catch(e){
        console.log(e);
    }
}



const EmpDB = mongoose.model('EmpDB', empschema);
module.exports = EmpDB;