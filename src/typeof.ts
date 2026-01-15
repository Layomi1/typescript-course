// typeof is TS feature that stores that type of value used in a variable e.g,
const username = "Max";
console.log(typeof username); //is pure Js

//  in Ts world
type Username = typeof username; // it sets the type as Max because it is a const, if it were a let, the type would be string

const settings = {
  difficulty: "easy",
  players: ["james", "john"],
  minLevel: 10,
  didStart: false,
};

type Settings = typeof settings;

// working with functions
function sum(a: number, b: number) {
  return a + b;
}
function subtract(a: number, c: number) {
  return a - c;
}

type SumFn = typeof sum;
type SubtractFn = typeof subtract;
