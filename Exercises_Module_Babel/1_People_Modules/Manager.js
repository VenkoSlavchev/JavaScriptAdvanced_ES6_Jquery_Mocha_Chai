'use strict';
let Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.dividend = 0;
        this.tasks.push(' scheduled a meeting.');
        this.tasks.push(' is preparing a quarterly report.');
    }

    work() {
        for (let task of this.tasks) {
            console.log(`${this.name} ${task}`);
        }
    }

    collectSalary() {
        console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
    }

    getSalary() {
        return this.salary + this.dividend;
    }
}
module.exports = Manager;