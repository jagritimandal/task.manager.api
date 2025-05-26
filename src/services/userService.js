const Users = require('../models/user');

const UserService = {
  
  createUser: async (userData) => {
    const users = new Users(userData);
    await users.save();
    const token = await users.generateAuthToken();
    return { users, token };
  },

  loginUser: async (email, password) => {
    const users = await Users.findByCredentials(email, password);
    const token = await users.generateAuthToken();
    return { users, token };
  },

  logoutUser: async (users, token) => {
    users.tokens = users.tokens.filter((tok) => tok.token !== token);
    await users.save();
  }
};

module.exports = UserService;
