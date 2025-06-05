 const mongoose = require('mongoose');
 const validator = require('validator');
 const bcrypt = require('bcrypt');
 const jwt = require('jsonwebtoken');

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
     validate(value) {
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
     validate(value) {
       if (value.toLowerCase().includes('password')) {
         throw new Error('Password cannot contain "password"');
       }
     }
   },
   tokens: [{
     token: {
       type: String,
       required: true
     }
   }]
 }, {
   timestamps: true
 });

 userSchema.virtual('tasks', {
   ref: 'Task',
   localField: '_id',
   foreignField: 'owner'
 });

 userSchema.methods.toJSON = function () {
   const users = this.toObject();

   delete users.password;
   delete users.tokens;

   return users;
 };

 userSchema.methods.generateAuthToken = async function () {
   const users = this;
   const token = jwt.sign({ _id: users._id.toString() }, process.env.JWT_SECRET);

   users.tokens = users.tokens.concat({ token });
   await users.save();

   return token;
 };

 userSchema.statics.findByCredentials = async (email, password) => {
   const users = await Users.findOne({ email });

   if (!users) {
     throw new Error('Invalid email or password');
   }

   const isMatch = await bcrypt.compare(password, users.password);

   if (!isMatch) {
     throw new Error('Invalid email or password');
   }

   return users;
 };

 userSchema.pre('save', async function (next) {
   const users = this;

   if (users.isModified('password')) {
     users.password = await bcrypt.hash(users.password, 8);
   }

   next();
 });

 const Users = mongoose.model('Users', userSchema);

 module.exports = Users;
