const person = {
  name: "Alkaline Foster",
  age: 24,
  skills: ["HTML5", "CSS3", "Javascript", "Bootstrap5", "Tailwind"],
};

// 1. Template String
const about = `My name is ${person.name}. Age is ${person.age}. I am learning ${person.skills[2]}.`;

console.log(about);

console.log();

// 2. Arrow Functions
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// 3. Spread Operator(...)
const numbers = [89, 35, 98, 12];

// Copying an array
const newNumbers = [...numbers];

numbers.push(99);
numbers.push(99);
numbers.push(99);
console.log(numbers);
console.log(newNumbers);

// Create a new array from an older array and add an element.
const currentNumbers = [...numbers, 55];

console.log(currentNumbers);
