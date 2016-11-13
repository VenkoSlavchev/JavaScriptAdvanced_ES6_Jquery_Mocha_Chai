'use strict';
class Rat {
    constructor(name) {
        this._name = name;
        this._unitedRats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this._unitedRats.push(otherRat);
        }
    }

    getRats() {
        return this._unitedRats;
    }

    toString() {
        let result = `${this._name}\n`;
        if (this._unitedRats.length > 0) {
            this._unitedRats.forEach(x => {
                result += `##${x._name}\n`;
            })
        }
        return result;
    }
}
//Test the code
// let r = new Rat('vasko'),
//     venc = new Rat('venci'),
//     kol = new Rat('kolio'),
//     pesh = new Rat('pesho');
// r.unite(venc);
// r.unite(kol);
//
//
// console.log(r.rats);
