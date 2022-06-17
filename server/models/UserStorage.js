const fs = require("fs").promises;

class UserStorage {
  // 해당 id 유저의 모든 속성값을 추출
  static #getUserInfo(data, id) {
    const users = JSON.parse(data);
    const usersKeys = Object.keys(users);
    const idx = users.id.indexOf(id);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static #getUsers(data, isAll, fields) {
    const users = JSON.parse(data);
    if (isAll) return users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
  // 모든 유저의 필요한 속성값을 입력하면 각 속성의 정보들을 추출
  static getUsers(isAll, ...fields) {
    return fs
      .readFile("./databases/users.json")
      .then((data) => {
        return this.#getUsers(data, isAll, fields);
      })
      .catch(console.error);
  }

  // 데이터베이스 정보와 id 정보 전달 후 해당 id 유저 정보 추출
  static getUserInfo(id) {
    return fs
      .readFile("./databases/users.json")
      .then((data) => {
        return this.#getUserInfo(data, id);
      })
      .catch(console.error);
  }

  // 회원가입시 정보 저장
  static async save(userInfo) {
    const users = await this.getUsers(true);
    if (users.id.includes(userInfo.id)) {
      throw "이미 존재하는 아이디입니다.";
    }
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pw.push(userInfo.pw);
    users.email.push(userInfo.email);
    users.age.push(userInfo.age);
    users.gender.push(userInfo.gender);

    // 데이터 추가
    fs.writeFile("./databases/users.json", JSON.stringify(users));
    return { success: true };
  }
}

module.exports = UserStorage;
