//  it is used in store the keys of a variable
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;
let validKey: UserKeys;

validKey = "name";
validKey = "age";

// e.g 2;
function getProps<T extends object, U extends keyof T>(obj: T, key: U) {
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
