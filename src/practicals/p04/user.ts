export class User {
    constructor(public username: string, private password:string){
        this.username = username;
        this.password = password;

    }
    private static loginAttempts = 0;
    login(password:string): boolean{
        if(password === this.password){
            return true;
        }
        else{
            return false;
        }
        User.loginAttempts++;
    }
    getLoginAttempts(){
        return User.loginAttempts;
    }
}
