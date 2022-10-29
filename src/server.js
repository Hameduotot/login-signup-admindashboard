function User(username, password, name, email, role) {
  this.username = username;
  this.password = password;
  this.name = name;
  this.email = email;
  this.role = role;
}
class UserList {
  constructor() {
    this.Userlist = [
      new User("user1", "pass1", "name1", "email1@yahoo.com", "user"),
      new User("user2", "pass2", "name2", "email2@yahoo.com", "admin"),
      new User("user3", "pass3", "name3", "email3@yahoo.com", "user"),
    ];
  }

  addUser(username, password, name, email) {
    const NewUser = new User(username, password, name, email, "user");
    this.Userlist.push(NewUser);
  }
  deleteUser(username) {
    this.Userlist = this.Userlist.filter((u) => u.username !== username);
  }
  getuser(username) {
   
    return this.Userlist.find((u) => u.username === username);
  }
  login(username, password) {
    // if (this.Userlist[username] && this.Userlist[username].pass === password) {
    //   return true;
    // }
    // return false;
    // return !!(
    //   this.Userlist[username] && this.Userlist[username].pass === password
    // );
    let checkUserName = this.Userlist.find((u) => u.username === username);
    return !!(checkUserName.password === password);
  }
  getusers() {
    return this.Userlist;
  }
  editeUser(previousUser, newUser, newPassword, newName, newEmail, newRole) {
    const editedUsers = this.Userlist.map((user) => {
      if (user.username === previousUser) {
        return new User(newUser, newPassword, newName, newEmail, newRole);
      }
      return user;
    });
    this.Userlist = editedUsers;
  }
}

export default new UserList();
