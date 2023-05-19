import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Amir Akhavan",
    email: "Amir@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Ali Akhavan",
    email: "Ali@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
