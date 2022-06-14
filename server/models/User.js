const UserStorage = require("../models/UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  // 로그인
  login() {
    const client = this.body;
    const { id, pw } = UserStorage.getUserInfo(client.id);
    if (id) {
      if (id === client.id && pw === client.pw) {
        return { success: true };
      }
      return { success: false, msg: "비밀번호가 틀렸습니다." };
    }
    return { success: false, msg: "존재하지 않는 아이디입니다.. " };
  }

  // 회원가입
  register() {
    const client = this.body;
    UserStorage.save(client);
  }
}

module.exports = User;
