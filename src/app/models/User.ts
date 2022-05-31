class User {
    password: String;
    username: String;

    constructor(username: String, password: String) {
        this.password = password;
        this.username = username;
    }

    setUsername(username: String) {
        this.username = username;
    }
    setPassword(password: String) {
        this.password = password;
    }
}