// this file represents the Credentials Class

// the Credentials class is associated with the AuthService and the LoginComponent.ts

export class Credentials {
    username: string;
    password: string;

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;    
    }
}