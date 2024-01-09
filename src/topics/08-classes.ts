export class Person {
    //public Name: String;
    //private Address: String;

    constructor( 
        public Name: String, 
        private Address: String = "No Address",
        ) {} 
}

export class Hero extends Person {
    constructor(
        public AlterEgo: String,
        public Age: Number,
        public RealName: String,
    ) {
         super(RealName, "New York");
    }
}

const IronMan = new Hero("IronMan", 45, "Tony Stark");

console.log(IronMan);
