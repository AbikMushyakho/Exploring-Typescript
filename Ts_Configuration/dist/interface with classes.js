"use strict";
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user3;
user3 = new Person('Abik');
user3.greet("Hi there  I am");
console.log(user3);
//# sourceMappingURL=interface%20with%20classes.js.map