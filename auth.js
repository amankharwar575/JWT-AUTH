const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const path = require("path");

const jwtPassword = "123456";
const app = express();

app.use(bodyParser.json()); // To parse JSON in req.body
app.use(express.static("public")); // To serve index.html, script.js, etc.

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  return ALL_USERS.some(user => user.username === username && user.password === password);
}

app.post("/signin", function (req, res) {
  const { username, password } = req.body;

  if (!userExists(username, password)) {
    return res.status(403).json({ msg: "User doesn't exist in DB" });
  }

  const token = jwt.sign({ username }, jwtPassword);
  res.json({ token });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    const otherUsers = ALL_USERS.filter(user => user.username !== username);
    res.json(otherUsers);
  } catch (err) {
    res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
