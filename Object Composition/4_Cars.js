'use strict';
function solve(arr) {
    let closure = (function () {
        let map = new Map();

        function create(name) {
            let object = {};
            map.set(object, name);
            return object
        }

        function createAndInherit(name, parentName) {
            let parentObj = {};
            for (let key of map) {
                if (key[1] == parentName) {
                    parentObj = key[0];
                }
            }
            let object = Object.create(parentObj);
            map.set(object, name);
            return object;
        }

        function set(name, key, value) {
            let foundMatch = {};
            for (let key of map) {
                if (key[1] == name) {
                    foundMatch = key[0];
                }
            }
            foundMatch[key] = value;
        }

        function print(name) {
            let result = [];
            for (let key of map) {
                if (key[1] == name) {
                    for (let property in key[0]) {
                        result.push(property + ':' + key[0][property]);
                    }
                }
            }
            console.log(result.join(', '));
        }

        return {
            create: create,
            createAndInherit: createAndInherit,
            set: set,
            print: print
        }
    })();

    for (let i = 0; i < arr.length; i++) {
        let firstElement = arr[i].split(' ');
        if (firstElement.length === 2 && firstElement[0] === 'create') {
            closure.create(firstElement[1]);
        } else if (firstElement.length > 2 && firstElement[0] === 'create') {
            closure.createAndInherit(firstElement[1], firstElement[3]);
        } else if (firstElement[0] === 'set') {
            closure.set(firstElement[1], firstElement[2], firstElement[3]);
        } else if (firstElement[0] === 'print') {
            closure.print(firstElement[1]);
        }
    }
}
//Test the code
// solve(['create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2']
// );
