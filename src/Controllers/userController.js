const UserService = require('../services/userService');

const usersinfo = async (req, res) => {
  try {
    const users = req.user; // assuming middleware sets this
    if (!users) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


const signup = async (req, res) => {
  try {
    const { users, token } = await UserService.createUser(req.body);

    return res.status(201).json({
      message: "New user added",
      type: "success",
      data: { users, token }
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};


const login = async (req, res) => {
  try {
    const { users, token } = await UserService.loginUser(req.body.email, req.body.password);
    res.json({ users, token });
  } catch (e) {
    res.status(400).json(e);
  }
};

const logout = async (req, res) => {
  try {
    await UserService.logoutUser(req.user, req.token);
    res.json();
  } catch (e) {
    res.status(500).json(e);
  }
};

module.exports = {
  signup,
  login,
  logout,
  usersinfo
};
