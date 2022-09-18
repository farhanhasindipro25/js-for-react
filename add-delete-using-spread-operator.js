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

const newProduct = {
  name: "Microphone",
  price: 11000,
  brand: "Logitech",
  color: "black",
};

// 1. Add a new property using spread operator(...)
// Copy the products array and then add the newProduct

const newProducts = [...products, newProduct];
console.log(newProducts);

// 2. Remove a property
// Create a new array without that specific property.
// Remove phone meanse creating a new array without the phone.
const remaining = newProducts.filter((products) => products.name !== "phone");
console.log(remaining);
