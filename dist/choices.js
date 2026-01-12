"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Guest"] = 1] = "Guest";
    Role[Role["Editor"] = 2] = "Editor";
})(Role || (Role = {}));
let userRole = Role.Editor; //  (or other options in the enum)
userRole = 1;
// OR
//  an alternative to enums is using union literals i.e
// type Role = "admin" | "guest" | "editor";
// userRole = "editor";
//# sourceMappingURL=choices.js.map