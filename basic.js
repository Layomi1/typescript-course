var userName; //explicit type assignment
var userAge = 38; //inferred type
userName = "Max";
// function types
function add(a, b) {
    return a + b;
} // explicit type assignment
function sum(a, b) {
    if (b === void 0) { b = 5; }
    return a + b;
} // explicit type assignment and inferred type
add(10, 5);
sum(15);
console.log(add(10, 5));
console.log(sum(15, 10));
