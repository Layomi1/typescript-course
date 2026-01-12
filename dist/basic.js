"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let userName; //explicit type assignment
let userAge = 38; //inferred type
userName = "Max";
// function types
function add(a, b) {
    return a + b;
} // explicit type assignment
function sum(a, b = 5) {
    return a + b;
} // explicit type assignment and inferred type
add(10, 5);
sum(15);
console.log(add(10, 5));
console.log(sum(15, 10));
console.log(sum(10, 10));
//# sourceMappingURL=basic.js.map