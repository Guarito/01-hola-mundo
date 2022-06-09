import { ROLES } from "./roles.enum";

export class User {
    firstName = "";
    lastName = "";
    email = "";
    password = "";
    role = ROLES.USER;
    constructor(firstName, lastName, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
