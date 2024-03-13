const bcrypt = require('bcryptjs');

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("password123", 10)
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: bcrypt.hashSync("secret456", 10)
  }
];

module.exports = usersData;