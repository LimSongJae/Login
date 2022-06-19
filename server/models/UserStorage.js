const db = require("../config/db");
class UserStorage {

  // DB에 로그인 요청
  static getUserInfo(id) {
    return new Promise((res, rej) => {
      const query = "SELECT * FROM users WHERE id = ?;";
      db.query(query, [id], (err, data) => {
        if (err) rej(`${err}`); // DB 저장된 ID가 없을 시 err발생
        res(data[0]);
      });
    });
  }

  // DB에 정보 저장
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
          // 아이디 중복일 시 rej 응답 -> DB에서 PRIMARY KEY로 설정함
          if (err) rej(`${err}`);
          res({ success: true });
        }
      );
    });
  }
}

module.exports = UserStorage;
