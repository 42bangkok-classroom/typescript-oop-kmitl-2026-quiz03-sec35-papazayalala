export class Person {
    firstname?: string;
    lastname?: string;
    private age?: number;

    static COUNTRY = 'thailand'
    setAge(age?: number){
        this.age = age;
    }
    getFullName(){
        return this.firstname + ' ' + this.lastname;
    }
    getAge(){
        return this.age;
    }
}