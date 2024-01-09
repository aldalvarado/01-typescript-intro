function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
    ) {
        return class extends constructor {
            newProperty = "New Property";
            hello = "override";
        }
    }



@classDecorator
export class superClass {


    public myProperty: string = "Abc123";

    print() {
        console.log("Hola Mundo")
    }
}

export function WhatsMyType<T>(argument: T): T{
    return argument;
}

console.log(superClass);

const myClass = new superClass();

console.log(myClass);
