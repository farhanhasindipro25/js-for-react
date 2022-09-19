const addToLocalStorage = () => {
  const idInput = document.getElementById("storage-id");
  const id = idInput.value;
  const valueInput = document.getElementById("storage-value");
  const value = valueInput.value;

  if (id && value) {
    localStorage.setItem(id, value);
  }
  idInput.value = "";
  valueInput.value = "";
};

// To keep values as an array.
// This won't work as the value need to be set as strings.
localStorage.setItem("A", [1, 2, 3]); // Stores as 1,2,3
// To make it work, JSON.stringify needs to be used.
localStorage.setItem("A", JSON.stringify([1, 2, 3])); // stores as [1,2,3]

// To keep values as an object.
const pen = { price: 10, color: "black", ink: "blue" };
// This won't work as the value need to be set as strings.
localStorage.setItem("pen", pen); // stores as [object Object]

// To make it work, JSON.stringify needs to be used.
localStorage.setItem("pen", JSON.stringify(pen)); // Stores as {"price":10,"color":"black","ink":"blue"}

// This gives a string.
const storedPen = localStorage.getItem("pen");
// To convert this string to object.
const penObj = JSON.parse(storedPen);
pen.price = 15;
localStorage.setItem("pen", JSON.stringify(pen));
