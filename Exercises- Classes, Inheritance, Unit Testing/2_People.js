'use strict';
function solve() {
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

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}
