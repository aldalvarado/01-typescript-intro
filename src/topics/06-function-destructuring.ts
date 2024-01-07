interface Product {
    Name: string;
    Price: number;
}

const Phone : Product = {
    Name: "Samsung A51",
    Price: 250000.0
}

const Tablet : Product = {
    Name: "iPad Air",
    Price: 250000.0
}

const ShoppingCart = [ Phone, Tablet];

const Tax = 0.15

interface TaxCalculatorOptions {
    Tax: number,
    Products: Product[],
}

function TaxCalculator(options: TaxCalculatorOptions): number[] {
    let total = 0;
    options.Products.forEach(({ Price }) => {
        total += Price;
    });
    return [total, total*options.Tax];
}

const [Total, tax] = TaxCalculator({
    Tax,
    Products: ShoppingCart,
})

console.log ("Total ", Total);
console.log ("Tax ", tax);
