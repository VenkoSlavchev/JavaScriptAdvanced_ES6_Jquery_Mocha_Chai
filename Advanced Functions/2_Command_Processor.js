'use strict';
function manipulateString(arr) {
    let internelString = '';
    for (let ind = 0; ind < arr.length; ind++) {
        let command = arr[ind].split(' ')[0],
            string = arr[ind].split(' ')[1];

        switch (command) {
            case 'append' :
                internelString = append(string, internelString);
                break;
            case 'removeStart' :
                internelString = removeStart(internelString, string);
                break;
            case 'removeEnd' :
                internelString = removeEnd(internelString, string);
                break;
            case 'print' :
                console.log(internelString);
                break;
        }

    }

    function append(stringToAppend, internelString) {
        return internelString + stringToAppend;
    }

    function removeStart(stringToRemoveFrom, numberOfElementsToRemove) {
        return stringToRemoveFrom.slice(numberOfElementsToRemove);
    }

    function removeEnd(stringToRemoveFrom, numberOfElementsToRemove) {
        return stringToRemoveFrom.slice(0, stringToRemoveFrom.length - numberOfElementsToRemove);
    }
}
//Test the code
// manipulateString(['append 123',
//     'append 45',
//     'removeStart 2',
//     'removeEnd 1',
//     'print']
// );