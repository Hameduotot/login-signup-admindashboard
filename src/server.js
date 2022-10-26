function User(username, password, name, email) {
  this.username = username;
  this.password = password;
  this.name = name;
  this.email = email;
}
class UserList {
  constructor() {
    this.Userlist = {
      user1: {
        username: "user1",
        pass: "pass1",
        name: "name1",
        email: "email1@yahoo.com",
        role: "user",
      },
      user2: {
        username: "user2",
        pass: "pass2",
        name: "name2",
        email: "email2@yahoo.com",
        role: "admin",
      },
      user3: {
        username: "user3",
        pass: "pass3",
        name: "name3",
        email: "email3@yahoo.com",
        role: "user",
      },
    };
  }

  addUser(username, password, name, email) {
    const user = new User(username, password, name, email);
    user.role = "user";
    this.Userlist[username] = user;
  }
  deleteUser(user) {
    delete this.Userlist[user];
  }
  getuser(username) {
    return this.Userlist[username];
  }
  login(username, password) {
    if (this.Userlist[username] && this.Userlist[username].pass === password) {
      return true;
    }
    return false;
  }
  getusers() {
    return this.Userlist;
  }
}

const userList = new UserList();

export default userList;
