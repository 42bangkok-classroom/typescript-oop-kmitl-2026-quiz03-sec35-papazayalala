export class User {
    constructor(public username: string, private password:string){
        this.username = username;
        this.password = password;

    }
    private loginAttempts = 0;
    login(password:string): boolean{
        if(password === this.password){
            return true;
        }
        else{
            return false;
        }
        this.loginAttempts++;
    }
    getLoginAttempts(){
        return this.loginAttempts;
    }
}
