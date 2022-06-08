const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
var cors = require("cors");
app.use(cors());

const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.static(path.join(__dirname, "../clients/build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../clients/build/index.html"));
});

app.post("/login", function (req, res) {
  console.log(req.body);
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../clients/build/index.html"));
});
