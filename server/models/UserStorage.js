class UserStorage {
  static #users = {
    id: ["thdwo999", "songje99", "dlathdwo999"],
    pw: ["s12345", "xhdtls09!", "xhdtls09!@"],
    name: ["임송재", "홍길동", "임꺽정"],
    email: [
      "thdwo999@naver.com",
      "songje99@gmail.com",
      "dlathdwo999@naver.com",
    ],
    age: ["23", "24", "26"],
    gender: ["남", "여", "남"],
  };

  // 모든 유저의 필요한 속성값을 입력하면 각 속성의 정보들을 추출
  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  // 해당 id 유저의 모든 속성값을 추출
  static getUserInfo(id) {
    const users = this.#users;
    const usersKeys = Object.keys(users);
    const idx = users.id.indexOf(id);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  // 회원가입시 정보 저장
  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pw.push(userInfo.pw);
    users.email.push(userInfo.email);
    users.age.push(userInfo.age);
    users.gender.push(userInfo.gender);

    console.log(users);
  }
}

module.exports = UserStorage;
