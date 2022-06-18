"use strict";

const mysql = require("mysql");

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "xhdtls09!",
  database: "user",
});

db.connect();

module.exports = db;
