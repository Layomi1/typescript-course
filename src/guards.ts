// the type guard is check if a prop(s) exist>It can be done using the 'in' or  Discriminated Unions
type FileSource = {
  type: "file";
  path: string;
};

const fileSource: FileSource = {
  type: "file",
  path: "some,path/to/file.csv",
};

type DSource = { type: "db"; connectionUrl: string };

const dSource: DSource = {
  type: "db",
  connectionUrl: "some-connection-url",
};

type Source = FileSource | DSource;

// outsourcing types: It is used when types will be used in multiple function, so the guard will be stored in a function e.g;
function isFile(source: Source) {
  return source.type === "file";
}

function loadData(source: Source) {
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
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User("Max");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
  // .join() OR .scan() ...
  if (entity instanceof User) {
    entity.join();
    return;
  }
  entity.scan();
}
