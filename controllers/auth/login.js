const { User } = require("../../models/user");
const jwt = require("jsonwebtoken");

const { createToken } = require("../../helpers");

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  const pass = await user.verifyPassword(password);
  if (!user || !pass) {
    const error = new Error("Email or password is incorrect");
    error.code = 401;
    throw error;
  }

  const payload = {
    id: user._id,
  };

  const token = createToken(payload);

  res.json({
    response: success,
    status: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
