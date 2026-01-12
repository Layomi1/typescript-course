function add(a: number, b: number): number {
  // the return type can be inferred when not explicitly specified
  return a + b;
}

// the void return type
function log(message: string): void {
  console.log("hello world!");
}

function logAndThrow(errorMessage: string): never {
  console.log(errorMessage);
  throw new Error(errorMessage);
}

function performJob(cb: (nsg: string) => void) {
  // ...
  cb("Do task");
}
performJob(log);

type User = {
  name: string;
  age: number;
  greet: () => string;
};

let user: User = {
  name: "Agnes",
  age: 12,
  greet() {
    return `Hello there, ${this.name}`;
  },
};
console.log(user.greet());

// function overloads is a feature in TS that allows multiple function signatures to be added to one the same function  by giving the return value g.g;
function getLength(val: any[]): number;
function getLength(val: string): string;
function getLength(val: string | any[]) {
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
