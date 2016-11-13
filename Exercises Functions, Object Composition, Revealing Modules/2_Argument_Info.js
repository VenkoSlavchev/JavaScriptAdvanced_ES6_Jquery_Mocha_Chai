'use strict';
function result() {
    let result = new Map,
        end = [],
        stringCount = 0,
        numberCount = 0,
        functionCount = 0,
        objectCount = 0;
    Array.from(arguments).forEach(x => {
        switch (typeof(x)) {
            case 'string' :
                stringCount++;
                if (result.has('string')) {
                    result.set('string', stringCount)
                }
                result.set('string', stringCount);
                break;
            case 'number' :
                numberCount++;
                if (result.has('number')) {
                    result.set('number', numberCount)
                }
                result.set('number', numberCount);
                break;
            case 'function' :
                functionCount++;
                if (result.has('function')) {
                    result.set('function', functionCount)
                }
                result.set('function', functionCount);
                break;
            case 'object' :
                objectCount++;
                if (result.has('object')) {
                    result.set('object', objectCount)
                }
                result.set('object', objectCount);
                break;
        }
    });
    Array.from(arguments).forEach(x => console.log(`${typeof (x)}: ${x}`));
    end = Array.from(result).sort((a, b) => {
        if (b[1] > a[1]) {
            return b[1] - a[1];
        }
    });
    for (let [key,val] of end) {
        console.log(`${key} = ${val}`);
    }

}
//Test the code
// result({name: 'bob'}, 3.333, 9.999);