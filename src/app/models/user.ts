export class User {
    user_id: number;
    first_name: string;
    last_name: string;
    username: string;
    password: string;
    email: string

    constructor(firstname: string, lastname: string, username: string, password: string, email: string) {
        this.first_name = firstname;
        this.last_name = lastname;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
