"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let store = {};
store.isOpen = false;
store.role = "janitor";
store.name = "John";
console.log(store);
function merge(a, b) {
    return [a, b, b];
}
function combine(a, b) {
    return { ...a, ...b };
}
// generic with function and object
const sum = merge(9, 7);
console.log(sum);
function mergeObject(a, b) {
    return { ...a, ...b };
}
const merged = mergeObject({ username: "Max" }, { age: 35 });
console.log(merged);
//generic classes and interfaces
// class User {
//   constructor(public id: string | number | object) {}
// }
//  changing the above into a generic type
class User {
    dd;
    constructor(dd) {
        this.dd = dd;
    }
}
const user = new User("Mav");
console.log(user);
//# sourceMappingURL=generic.js.map