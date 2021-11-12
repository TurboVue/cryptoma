export default class User {
    constructor(fullname, phone, email, password, password_confirmation) {
        this.fullname = fullname
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.password_confirmation = password_confirmation
    }
}