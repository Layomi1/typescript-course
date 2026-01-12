// let form = document.getElementsByTagName("form");

// const username = document.getElementById("user-name")!; used when certain the variable is not null

const username = document.getElementById(
  "user-name"
) as HTMLInputElement | null;
if (!username) {
  throw new Error("Element not found!");
} // this type narrowing

console.log(username.value);

console.log(username?.value); // optional chaining
