'use strict';
let data = require('./data');

function sort(property) {
    let sortedData = data;
   sortedData.sort((a,b)=>{
       return a[property].localeCompare(b[property]);
    });
     return sortedData;
}

function filter(property, value) {
    let filteredData = data.filter((x) => {
        if(x[property] == value){
            return x;
        }
    });
    return filteredData;
}


result.sort = sort;
result.filter = filter;
