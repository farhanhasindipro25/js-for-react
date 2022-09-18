// 1. Array destructuring (Serial Matters as indexes are checked)
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x,y] = numbers[1];
const [x, y] = numbers;

console.log(x, y);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

console.log(boxify(90, 34));
const [a, b] = boxify(111, 222);
console.log(a, b);

const person = {
  name: "Alkaline Foster",
  age: 24,
  skills: ["HTML5", "CSS3", "Javascript", "Bootstrap5", "Tailwind"],
};

const [firstSkill, secondSkill] = person?.skills;
console.log(firstSkill, secondSkill);

// 2. Object Destructuring (Serial Does not matter)
const { name, age } = { name: "A", age: 14 };
const { name2, age2 } = { id: 1, name2: "A", salary: 70000, age2: 14 };
console.log(name, age);
console.log(name2, age2);
