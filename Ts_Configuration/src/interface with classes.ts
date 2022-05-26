// Interfaces
// only exist in typescript
interface Greetable {
  name: string;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age=30;
  constructor(n: string) {
    this.name = n;
  }
  greet(phrase:string) {
    console.log(phrase + " " + this.name);
  }
}

let user3: Greetable;
user3 =  new Person('Abik')
user3.greet("Hi there  I am");
console.log(user3)
