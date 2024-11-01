export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

// 1) Desestructurar los argumentos
// function taxCalculation(options: TaxCalculationOptions): number[] {
//     let total = 0;

    // 3) Desestructurar el producto porque solo preciso el precio
//     options.products.forEach(product => {
//         total += product.price;
//     });
//     return [total, total * options.tax];
// }

export function taxCalculation(options: TaxCalculationOptions): number[] {
    const {tax, products} = options; // conviene sacar aca lo que preciso por si hay muchos argumentos y no ensuciar la firma
    let total = 0;

    // 3) Desestructurar el producto porque solo preciso el precio
    products.forEach(({price}) => {
        total += price;
    });
    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

// 2) Desestructurar el resultado
// const result = taxCalculation({
//     products: shoppingCart,
//     tax: tax,
// });

const [products, tax2] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

console.log('Total', products);
console.log('Tax', tax2);




















export {};