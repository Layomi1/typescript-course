//  it is used for extract a part of an object in another type> it acn also be used on Arrays to extract the value type of the elements that are stored in the array by adding number in the []
const appUser = {
  name: "deola",
  age: 12,
  permissions: [
    {
      id: "p1",
      title: "nurse",
      description: " an auxiliary nurse",
    },
  ],
};

type AppUser = typeof appUser;
type Perms = AppUser["permissions"];

// indexed access type
type Perm = Perms[number];

type Names = Array<string>;
type Name = Names[number];
