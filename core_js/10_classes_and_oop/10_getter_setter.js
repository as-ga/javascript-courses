class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password}gauxt`;
  }

  set password(value) {
    this._password = value;
  }
}

const gaurav = new User("gaurav@mail.ai", "abc");
console.log(gaurav);
