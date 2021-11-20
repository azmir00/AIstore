const bcrypt = require("bcryptjs");

const data = {
  users: [
    {
      name: "Azmir",
      email: "azmiradmin@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Irfan",
      email: "irfan@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
    {
      name: "Karim",
      email: "karim@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
    {
      name: "Badri",
      email: "badri@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
};

module.exports = data;
