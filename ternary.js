const money = 1000;

let food = money > 100 ? "Main Course Meal" : "Light Snacks";
console.log(food);

const isActive = true;
const showUser = () => console.log("Display User");
const hideUser = () => console.log("Hide User");
isActive ? showUser() : hideUser();

// Use && if the left side is true, right side will be executed.
isActive && showUser();
// Use || if the left side is false, right side will be executed.