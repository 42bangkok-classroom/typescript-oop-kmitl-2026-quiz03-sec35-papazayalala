export class Person {
    firstname?: string;
    lastname?: string;
    private age: number;
    static COUNTRY = 'Thailand'
    setAge(n: number){
        this.age = n;
    }
    getFullName(){
        return this.firstname + ' ' + this.lastname;
    }
    getAge(){
        return this.age;
    }
}