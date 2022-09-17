// 1. Declaring variables using 'let' and 'const'. Not 'var'.
console.log("1 - Declaring variables using 'let' and 'const'. Not 'var'.");
console.log();
// Stuff that are constant are declared using 'const'.
const name = "Farhan Hasin Dipro";
console.log("[Constant] Name:", name);
// Stuff that are likely to change are declared using 'let'.
let season = "Fall";
console.log("[Changeable] Season:", season);
season = "winter";
console.log("[Changeable] Season:", season);

console.log();

// 2.
/* Six basic conditions
i. > (Greater than)
ii. < (Less than)
iii. === (Triple Equal) [Not Double Equal]
iv. !== (Not Triple Equal) [Not Not Double Equal]
v. <= (Less than equals)
vi. >= (Greater than equals)
*/
/* Multiple Conditions
i. && (AND)
ii. || (OR)
*/

console.log("2 - Six basic conditions, and two multiple conditions.");
console.log();

let salary = 4000;
const car = "Dodge Charger";

if (salary >= 100000 && car) {
  console.log("You can get married");
} else if (salary >= 70000 || !car) {
  console.log("You have to wait two more years to get married");
} else {
  console.log("You are not eligible to get married yet");
}

console.log();

// 3. Array declaration, length, push
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers.length);
numbers.push(9);
console.log(numbers);
console.log(numbers.length);
numbers[1] = 4;
console.log(numbers);

console.log();

// 4. for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

console.log();

// 5. function
function multiply(num1, num2) {
  const result = num1 * num2;
  return result;
}
const output = multiply(35, 78);
console.log("Product of 35 and 78:", output);

console.log();

// 6. Object
const person = {
  name: "Alkaline Foster",
  age: 24,
  skills: ["HTML5", "CSS3", "Javascript", "Bootstrap5", "Tailwind"],
};
const personAge = "age";
// Accessing object properties in 3 ways.
// 1. Directly by property.
console.log(person.age);
// 2. Accessing via property name string.
console.log(person["age"]);
// 3. Accessing via property name in a variable.
console.log(person[personAge]);
