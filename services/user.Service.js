const User = require('../models/user.model');
const bcrypt =require('bcrypt');

const UserService = {
  createUser: async (payload) => {
    try{
      // Check if email already exists
      const existingUser = await User.findOne({ email: payload.email });
      if (existingUser) {
        throw new Error('Email already registered');
      }
      // Hash the password
      const hashedPassword = await bcrypt.hash(payload.password, 6);
      //create user
      var user =new User({
        name:payload.name,
        email:payload.email,
        password:hashedPassword,
        mobileNumber:payload.mobileNumber,
        role:payload.role
      });
      const data =await user.save();
      if (data) {
        return data;
      }

    }catch(err){
      throw new Error(err.message);
    }
  },
getUserByEmail : async (email) => {
  return User.findOne({ email });
},
getAllUsers : async () => {
  return User.find();
},
};

module.exports = UserService;
