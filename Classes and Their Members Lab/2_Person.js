'use strict';
class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;

    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }

}
// let person = new Person('Maria','Lamo',22,'abfdf@ddja.vbg');
// console.log(person.toString());
//
// module.exports = {Person};