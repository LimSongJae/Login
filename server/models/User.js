"use strict";

const UserStorage = require("../models/UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  // 로그인
  async login() {
    const client = this.body;
    try {
      const { id, pw } = await UserStorage.getUserInfo(client.id);
      if (id) {
        if (id === client.id && pw === client.pw) {
          return { success: true };
        }
        return { success: false, msg: "비밀번호가 틀렸습니다." };
      }
    } catch (err) {
      return { success: false, msg: "아이디가 틀렸습니다." };
    }
  }

  // 회원가입
  async register() {
    const client = this.body;
    try {
      const response = await UserStorage.save(client);
      return response;
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

module.exports = User;
