export class Person {
    //public Name: String;
    //private Address: String;

    constructor( 
        public FirstName: String, 
        public LastName: String,
        private Address: String = "No Address",
        ) {} 
}

// export class Hero extends Person {
//     constructor(
//         public AlterEgo: String,
//         public Age: Number,
//         public RealName: String,
//     ) {
//          super(RealName, "New York");
//     }
// }

export class Hero {
    // public person: Person;
    constructor(
        public AlterEgo: String,
        public Age: Number,
        public RealName: String,
        public person: Person,
    ) {
        //this.person = new Person(RealName);
    }
}

const tony = new Person("Tony","Stark","New York");

const IronMan = new Hero("IronMan", 45, "Tony Stark", tony);

console.log(IronMan);
