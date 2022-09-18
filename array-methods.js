const products = [
  {
    name: "laptop",
    price: 65000,
    brand: "ASUS",
    color: "silver",
  },
  {
    name: "phone",
    price: 7000,
    brand: "Apple",
    color: "Harper Violet",
  },
  {
    name: "watch",
    price: 3000,
    brand: "Haylou",
    color: "Black",
  },
  {
    name: "camera",
    price: 70000,
    brand: "Sony",
    color: "Black",
  },
];

// 1. map()
// Returns property values within an array.
const brands = products.map((product) => product.brand);
console.log(brands);
const prices = products.map((product) => product.price);
console.log(prices);

// 2. forEach()
// Gives the property values. Does not return anything for which it is not assigned to a variable.
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));

// 3. filter
// Returns an array of objects fulfilling the condition.
const cheapProducts = products.filter((product) => product.price <= 5000);
console.log(cheapProducts);

// 4. find
// Returns the objects fulfilling the condition.
const cheapest = products.find((product) => product.price <= 5000);
console.log(cheapest);
