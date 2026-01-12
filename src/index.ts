//  it allow dynamically storing of props as long as the match the type stated. It uses the [] placeholder e.g
type DataStore = {
  [props: string]: number | string;
};
// the DataSource can also be rewritten as
let someObj: Record<string, number | string> = {};
let store: DataStore = {};
store.id = 5;
store.name = "Bryan";
someObj.name = "Mary";
console.log(`My age is ${1 + 2}`);

// CONST TYPE
// const type is for narrowing down the type variable (i.e property in the array cannot be changed oe edited) e.g
let role = ["Judge", "Lawyer", "Plaintiff"] as const;
// role.push("janitor");
console.log(role);

//  THE SATISFIES keyword: it cause TSto check the value of a variable and infers a more concrete type for the variable
let someEntries = {
  entry1: 0.5,
  entry2: 1.75,
} satisfies Record<string, number>;

console.log(someEntries);
