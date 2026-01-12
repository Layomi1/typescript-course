// It allows making more flexible types
type DataSource<T> = {
  [key: string]: T;
};

let store: DataSource<string | boolean> = {};
store.isOpen = false;
store.role = "janitor";
store.name = "John";

console.log(store);

function merge<T, K>(a: T, b: K) {
  return [a, b, b];
}
function combine<T, K>(a: any, b: any) {
  return { ...a, ...b };
}

// generic with function and object
const sum = merge(9, 7);
console.log(sum);

function mergeObject<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}

const merged = mergeObject({ username: "Max" }, { age: 35 });

console.log(merged);

//generic classes and interfaces

// class User {
//   constructor(public id: string | number | object) {}
// }
//  changing the above into a generic type

class User<T> {
  constructor(public dd: T) {}
}

const user = new User("Mav");

console.log(user);
