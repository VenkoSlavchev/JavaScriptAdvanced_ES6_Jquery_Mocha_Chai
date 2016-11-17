'use strict';
let Employee = require('./Employee');
class Junior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on a simple task.')
    }

    work() {
        for (let task of this.tasks) {
            console.log(`${this.name} ${task}`);
        }
    }

    collectSalary() {
        console.log(`${this.name} received ${this.salary} this month.`);
    }
}
module.exports = Junior;