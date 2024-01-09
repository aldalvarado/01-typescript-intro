export class Person {
    //public Name: String;
    //private Address: String;

    constructor( 
        public Name: String, 
        private Address: String = "No Address",
        ) {} 
}

const IronMan = new Person("Ramiro");

console.log(IronMan);
