'use strict';
function solve(arr, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let map = new Map;
    for (let i = 0; i < arr.length; i++) {
        let destination = arr[i].split('|')[0],
            price = Number(arr[i].split('|')[1]),
            status = arr[i].split('|')[2];

        switch (criteria) {
            case 'destination' :
                map.set(new Ticket(destination, price, status), destination);
                break;
            case 'price' :
                map.set(new Ticket(destination, price, status), price);
                break;
            case 'status' :
                map.set(new Ticket(destination, price, status), status);
                break;
        }

    }
    let array = Array.from(map),
        result = [];
    array.sort((a, b) => {
        if (typeof a[1] === 'string') {
            return a[1].localeCompare(b[1]);
        } else {
            return a[1] - b[1];
        }
    }).forEach(x => {
        result.push(x[0])
    });
    return result;

}
//Test the code
// solve(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//         'status'
// );




