

interface User  {
name : string,
age : number,
address? :{
    city : string,
    pincode : number,
},
}

class Manager implements User{
    name:string;
    age: number;

    constructor(name:string,age:number) {
        this.name = name;
        this.age = age;

    }

}
let user = new Manager("Aniketh",20);
console.log(user)