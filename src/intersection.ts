//  the intersection type is used for combining multiple types by using an & symbol in type and  the , symbol in interface.
// it can be used with types  e.g,
type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionUrl: string;
  credential: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;
type AccessedDatabase = DatabaseData & Status;

// using intersection types with interfaces
// interface FileData = {
//   path: string;
//   content: string;
// };

// interface DatabaseData = {
//   connectionUrl: string;
//   credential: string;
// };

// interface Status = {
//   isOpen: boolean;
//   errorMessage?: string;
// };

// interface AccessedFileData extends FileData , Status {};
// interface AccessedDatabase extends DatabaseData , Status{};
