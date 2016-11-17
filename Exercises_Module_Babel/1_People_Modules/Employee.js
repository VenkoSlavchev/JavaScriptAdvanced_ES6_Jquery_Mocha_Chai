'use strict';
class Employee {
    constructor(name, age) {
        if(new.target === Employee){
            throw new Error('Employee is abstract class')
        }
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    work() {

    }

    collcectSalary() {

    }
}

module.exports = Employee;