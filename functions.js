function add(a, b) {
    // the return type can be inferred when not explicitly specified
    return a + b;
}
// the void return type
function log(message) {
    console.log("hello world!");
}
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
function performJob(cb) {
    // ...
    cb("Do task");
}
performJob(log);
var user = {
    name: "Agnes",
    age: 12,
    greet: function () {
        return "Hello there, ".concat(this.name);
    },
};
console.log(user.greet());
