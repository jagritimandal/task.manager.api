const UserService = require('../services/user.service');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');

const userController ={
  //register new user
  registerUser : async (req,res) =>{
    try {
      const user = await UserService.createUser(req.body);
      if(user){
          const { _id, name, email, mobileNumber, role } = user;
          return res.status(201).json({ message: 'User created successfully',
            type :"success",
            data:{ _id, name, email, mobileNumber, role }});
        }
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  //login 
  loginUser : async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.getUserByEmail(email);
    if (!user) return res.status(401).json({ error: 'Invalid User' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid User' });

    const token = jwt.sign(
      { id: user._id, role: user.role }, 
      process.env.JWT_SECRET, 
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.json({ message: 'Login successful', token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
},
// Get all users (admin only)
getAllUsers : async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
}
module.exports = userController;
