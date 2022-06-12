const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const User = require("./models/User");

app.use(express.json());
var cors = require("cors");
const UserStorage = require("./models/UserStorage");
app.use(cors());

const port = 5000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, "../clients/build")));
app.use(bodyParser.json());
// URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../clients/build/index.html"));
});

app.post("/login", function (req, res) {
  const user = new User(req.body);
  const response = user.login();
  return res.json(response);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../clients/build/index.html"));
});
