const UserService = require('../services/userService');

const signup = async (req, res) => {
  try {
    const { user, token } = await UserService.createUser(req.body);
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
};

const login = async (req, res) => {
  try {
    const { user, token } = await UserService.loginUser(req.body.email, req.body.password);
    res.send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }
};

const logout = async (req, res) => {
  try {
    await UserService.logoutUser(req.user, req.token);
    res.send();
  } catch (e) {
    res.status(500).send(e);
  }
};

module.exports = {
  signup,
  login,
  logout
};
