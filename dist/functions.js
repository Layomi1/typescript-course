"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    // the return type can be inferred when not explicitly specified
    return a + b;
}
// the void return type
function log(message) {
    console.log("hello world!");
}
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
function performJob(cb) {
    // ...
    cb("Do task");
}
performJob(log);
let user = {
    name: "Agnes",
    age: 12,
    greet() {
        return `Hello there, ${this.name}`;
    },
};
console.log(user.greet());
function getLength(val) {
    if (val === "string") {
        const numberOfWords = val.split(" ").length;
        return `${numberOfWords} words`;
    }
    return val.length;
}
const numOfWords = getLength("Something");
numOfWords.length;
const numOfItems = getLength(["Cookies", "Cars", "Jewelries"]);
console.log("numOfWords: ", numOfWords);
console.log("numOfItems: ", numOfItems);
//# sourceMappingURL=functions.js.map