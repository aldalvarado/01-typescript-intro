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
    options.Products.forEach(Product => {
        total += Product.Price;
    });
    return [total, total*options.Tax];
}

const Result = TaxCalculator({
    Tax,
    Products: ShoppingCart,
})

console.log ("Total ", Result[0]);
console.log ("Tax ", Result[1]);
