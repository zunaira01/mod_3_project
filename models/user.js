const mongoose = require('mongoose');


const userSchema = new mongoose.SchemaType({
    email:{
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
    },
  
    password:{
        type: String,
        minLength: 6,
        unique: true,
        required: true
    },
},
{
  timesstamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;

