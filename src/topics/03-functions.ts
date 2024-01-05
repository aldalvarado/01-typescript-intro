function addNumbers(a: number, b: number): number {
    return a+b;
}

const addNumbersArrow = (a: number, b: number): string => {
    return `${ a + b }`; 
}

function Multiply (FirstNumber: number, SecondNumber?: number, Base: number= 2) {
    return FirstNumber * Base;
}

const result = addNumbers(1, 2);
const result2 = addNumbersArrow(1, 2);
const MultiplyResult = Multiply(5);

console.log ({ result, result2, MultiplyResult});
