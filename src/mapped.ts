//  Its is used dynamically adding the content of an object by basing them on the prop name of another object e.g;

type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

type Result<T> = {
  [K in keyof T]?: number;
};

/* manual method
type Result = {
  add: number;
  subtract: number;
};*/

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
};
let mathResults: Result<Operations> = {
  add: mathOperations.add(2, 4),
  subtract: mathOperations.subtract(2, 4),
};

// mapped type
/*1-  The mapping type also used to make prop name optional if they are not or non-optional if they are. To remove the optionality from the prop use -? e.g

type Operations = {
  add?: (a: number, b: number) => number;
  subtract?: (a: number, b: number) => number;
};
type Result<T> = {
  [K in keyof T]-?: number;
};

let mathResults: Result<Operations> = {
  add: mathOperations.add(2, 4),
};


2- to add readonly: so the prop can not be changed when defined.If the prop from the parent object are readonly the can changed in the object using it as base by add -readonly in front
type Operations = {
  readonly add: (a: number, b: number) => number;
  readonly subtract: (a: number, b: number) => number;
};

type Result<T> ={
    -readonly [K in keyof T]: number;
}

to remove readonly
type Result<T> ={
}
*/

/* manual method
let mathResult: Result = {
add: mathOperations.add(2,4),
subtract: mathOperations.subtract(2,4),
};*/
console.log(mathOperations.add(20, 10));
