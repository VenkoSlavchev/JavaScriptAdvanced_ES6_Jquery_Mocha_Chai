'use strict';
let Employee = require('./Employee');
class Senior extends Employee {
    constructor(name, age) {
        super(name, age);
        this.tasks.push(' is working on a complicated task.');
        this.tasks.push(' is taking time off work.');
        this.tasks.push(' is supervising junior workers.');
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
module.exports = Senior;