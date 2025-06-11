 const mongoose = require('mongoose');
 const validator =require('validator');

 const userSchema = new mongoose.Schema({
   name: {
     type: String,
     required: true,
     trim: true
   },
   email: {
     type: String,
     required: true,
     unique: true,
     trim: true,
     lowercase: true,
     validate(value) {// for email validation
       if (!validator.isEmail(value)) {
         throw new Error('Invalid email address');
       }
     }
   },
   password: {
     type: String,
     required: true,
     trim: true,
     minlength: 6,
     validate(value) { //for password validation
       if (value.toLowerCase().includes('password')) {
         throw new Error('Password cannot contain "password"');
       }
     }
   },
   mobileNumber:{
    type: String,
    required:true,
    trim:true
   },
   role:{
    type: String,
    enum :['admin','user'],
    default:'user',
   },
    createdAt: {
        type: Date,
        default: Date.now
    }
 });

 var User = mongoose.model('User', userSchema);

 module.exports = User;
