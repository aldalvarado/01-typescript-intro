export class Person {
    public Name: String;
    private Address: String;

    constructor() {
        this.Name = "Fernando";
        this.Address = "New York";
    } 
}

const IronMan = new Person();

console.log(IronMan);