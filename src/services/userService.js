const User = require('../models/user');

const UserService = {
  createUser: async (userData) => {
    const user = new User(userData);
    await user.save();
    const token = await user.generateAuthToken();
    return { user, token };
  },

  loginUser: async (email, password) => {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    return { user, token };
  },

  logoutUser: async (user, token) => {
    user.tokens = user.tokens.filter((tok) => tok.token !== token);
    await user.save();
  }
};

module.exports = UserService;
