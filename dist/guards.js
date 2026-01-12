"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileSource = {
    type: "file",
    path: "some,path/to/file.csv",
};
const dSource = {
    type: "db",
    connectionUrl: "some-connection-url",
};
// outsourcing types: It is used when types will be used in multiple function, so the guard will be stored in a function e.g;
function isFile(source) {
    return source.type === "file";
}
function loadData(source) {
    //  sing the 'in'
    // if ("path" in source) {
    if (isFile(source)) {
        //  source.path; =>use to open the file
        return;
    }
    //  or the discriminated unions
    //   source.connectionUrl; => to reach out to database
}
class User {
    name;
    constructor(name) {
        this.name = name;
    }
    join() {
        // ...
    }
}
class Admin {
    constructor(permissions) { }
    scan() {
        // ...
    }
}
const user = new User("Max");
const admin = new Admin(["ban", "restore"]);
function init(entity) {
    // .join() OR .scan() ...
    if (entity instanceof User) {
        entity.join();
        return;
    }
    entity.scan();
}
//# sourceMappingURL=guards.js.map