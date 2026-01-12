let userName: string; //explicit type assignment
let userAge = 38; //inferred type

userName = "Max";

// function types
function add(a: number, b: number) {
  return a + b;
} // explicit type assignment

function sum(a: number, b = 5) {
  return a + b;
} // explicit type assignment and inferred type

add(10, 5);
sum(15);
console.log(add(10, 5));
console.log(sum(15, 10));
console.log(sum(10, 10));
