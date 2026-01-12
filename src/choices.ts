enum Role {
  Admin,
  Guest,
  Editor,
}

let userRole = Role.Editor; //  (or other options in the enum)

userRole = 1;
// OR

//  an alternative to enums is using union literals i.e
// type Role = "admin" | "guest" | "editor";

// userRole = "editor";
