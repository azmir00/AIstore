const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  // a method that generate token with 3 PARAMETER
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET || "somethingsecret",
    {
      expiresIn: "30d",
    }
  );
};

module.exports = generateToken;
