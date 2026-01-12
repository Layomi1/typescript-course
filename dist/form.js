"use strict";
// let form = document.getElementsByTagName("form");
Object.defineProperty(exports, "__esModule", { value: true });
// const username = document.getElementById("user-name")!; used when certain the variable is not null
const username = document.getElementById("user-name");
if (!username) {
    throw new Error("Element not found!");
} // this type narrowing
console.log(username.value);
console.log(username?.value); // optional chaining
//# sourceMappingURL=form.js.map