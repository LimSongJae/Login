class UserStorage {
  static #users = {
    id: ["thdwo999", "songje99", "dlathdwo999"],
    pw: ["s12345", "xhdtls09!", "xhdtls09!@"],
    name: ["임송재", "홍길동", "임꺽정"],
  };

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
}

module.exports = UserStorage;
