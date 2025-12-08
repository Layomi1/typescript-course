// let form = document.getElementsByTagName("form");
// const username = document.getElementById("user-name")!; used when certain the variable is not null
var username = document.getElementById("user-name");
if (!username) {
    throw new Error("Element not found!");
} // this type narrowing
console.log(username.value);
console.log(username === null || username === void 0 ? void 0 : username.value); // optional chaining
