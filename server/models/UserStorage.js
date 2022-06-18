const db = require("../config/db");
class UserStorage {
  // 로그인
  static getUserInfo(id) {
    return new Promise((res, rej) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) rej(`${err}`);
        res(data[0]);
      });
    });
  }

  // 회원가입
  static save(userInfo) {
    return new Promise((res, rej) => {
      const query =
        "INSERT INTO users(id, pw, name, email, age, gender) VALUES(?, ?, ?, ?, ?, ?);";
      db.query(
        query,
        [
          userInfo.id,
          userInfo.pw,
          userInfo.name,
          userInfo.email,
          userInfo.age,
          userInfo.gender,
        ],
        (err) => {
          if (err) rej(`${err}`);
          res({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;
