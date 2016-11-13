'use strict';
function solve(obj) {
    let car = {};
    car.model = obj.model;
    if (obj.power <= 90) {
        car.engine = {
            power: 90,
            volume: 1800
        }
    } else if (obj.power <= 120) {
        car.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        car.engine = {
            power: 200,
            volume: 3500
        }
    }
    car.carriage = {
        type: obj.carriage,
        color: obj.color
    };
    if (obj.wheelsize % 2 === 0) {
        car.wheels = [obj.wheelsize - 1, obj.wheelsize - 1, obj.wheelsize - 1, obj.wheelsize - 1];
    } else {
        car.wheels = [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize];
    }
    console.log(car);
}
//Test the code
// solve(
//     {
//         model: 'Opel Vectra',
//         power: 110,
//         color: 'grey',
//         carriage: 'coupe',
//         wheelsize: 17
//
//     }
// );