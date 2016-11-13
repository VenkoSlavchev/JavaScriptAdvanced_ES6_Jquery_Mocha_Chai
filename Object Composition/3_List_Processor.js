'use strict';
function solve(arr) {

    let closure = (function () {
        let innerCollection = [];

        function add(string) {
            return innerCollection.push(string);
        }

        function remove(string) {
            return innerCollection = innerCollection.filter(x => x !== string);

        }

        function print() {
            console.log(innerCollection.join(','));
        }

        return {
            add: add,
            remove: remove,
            print: print
        }
    })();
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ')[0],
            string = arr[i].split(' ')[1];
        closure[command](string);
    }

}
//Test the code
// solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
