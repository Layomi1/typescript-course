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
