let hobbies = ["skipping", "baseball"];

// hobbies.push(14);

// to accept multiple types in an array

let users: (string | number)[]; // can also be written as let users: Array<string | number>;
users = [14, "bob"];
users = [9, 4];
users = ["plus", "sum"];

// Tuple:
// It is an array types with fixed, length: the no of type args determine the length of the array e.g
let results: [number, number, string];
results = [1, 2, "dot"];

// object types
let user: {
  name: string;
  age: number;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
} = {
  name: "Max",
  age: 38,
  hobbies: ["cooking"],
  role: {
    description: "student",
    id: 1,
  },
};

// object features
let goals: {} = "some text"; //the {} does not mean an empty object in TS, but the value must not be undefined or null

// this is Js because it is assigned
const gists = {};

// flexible objects with the Record type:
// it is used when the key/values pair that are to be used in Object are not determined yet. the Record type is Generic type that tell Ts that a value must be an object. example
let data: Record<string, number | string>;

data = {
  case: 1,
  case2: "something",
};
