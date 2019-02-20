export class UserFieldForm {

    private username;
    private email;
    private gender;
    private country;
    private role;
    constructor(email, username, country, gender,role) {
        this.email = email;
        this.username = username;
        this.country=country;
        this.gender=gender;
        this.role=role;

    }
    public getCountry() {
        return this.country;
    }



    public getGender() {
        return this.gender;
    }

    public setGender(gender) {
        this.gender = gender;
    }



    public getUsername() {
        return this.username;
    }



    public getEmail() {
        return this.email;
    }
    getRole(){
        return this.role;
    }








}
