// onject
let person: {
  name: string;
  age: number;
  hobbies:string[],
// tuple
role:[number,string];
} = {
  name: "Hitra",
  age: 30,
  hobbies: ['singing', 'reading'],
  role:[2,'admin']
};

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase())
}
enum Role {Admin = 'Admin', User = 'User'};

let person1 = {
  name: "Hitra",
  age: 30,
  hobbies: ['singing', 'reading'],
  role:Role.Admin
};
console.log(person.role);