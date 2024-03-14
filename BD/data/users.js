const bcrypt = require('bcryptjs');

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("alumno123", 10),
    rol: "alumno"
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    password: bcrypt.hashSync("profesor123", 10),
    rol: "profesor"
  },
  {
    id: 3,
    name: "Juan",
    email: "juan@example.com",
    password: bcrypt.hashSync("admin123", 10),
    rol: "admin"
  }
];

module.exports = usersData;