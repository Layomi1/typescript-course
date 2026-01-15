"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let validKey;
validKey = "name";
validKey = "age";
// e.g 2;
function getProps(obj, key) {
    const val = obj[key];
    if (val === undefined || val === null) {
        throw Error("Accessing undefined or null value");
    }
    return val;
}
const user = { name: "Julia", age: 10, password: "something" };
const data = {
    class: 2005,
    headGirl: "Mary",
    population: 308,
    color: ["indigo", "white", "gold"],
};
getProps(user, "password");
const setDetails = getProps(data, "color");
console.log(user);
console.log(setDetails);
//# sourceMappingURL=keyof.js.map