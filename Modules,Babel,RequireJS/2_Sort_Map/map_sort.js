'use strict';
function mapSort(map,sortFn) {
    let arrayFromMap = Array.from(map),
        sortedMap = new Map;
    arguments.length>1 ? arrayFromMap.sort(sortFn) : arrayFromMap.sort((a,b) => {
        return a[0] - b[0];
    });
    for (let element of arrayFromMap) {
        sortedMap.set(element[0],element[1]);
    }
    return sortedMap;
}

module.exports = mapSort;
