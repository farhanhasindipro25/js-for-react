// 1. JSON
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

const productsJSON = JSON.stringify(products);
console.log(products);
console.log(productsJSON);

const productsObj = JSON.parse(productsJSON);
console.log(productsObj);

// 2. fetch
fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data));
