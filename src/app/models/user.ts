export class User {
    user_id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string

    constructor(firstname: string, lastname: string, username: string, password: string, email: string) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
