let a: null;
// a = 2; a must be null

// BUT

let b: null | string; // can accept null or string
b = "Max";
b = null;

// Note null and undefined are different
let c: undefined | number;
c = 3;
// c = null; undefined is not null

c = undefined;
