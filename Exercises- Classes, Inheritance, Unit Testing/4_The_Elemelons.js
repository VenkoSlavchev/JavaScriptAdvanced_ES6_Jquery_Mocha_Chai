'use strict';
function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Abstract class can not be instanciated');
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
    }
    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = Number(this.weight) * Number(this.melonSort.length);
            this._element = 'Water';
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = Number(this.weight) * Number(this.melonSort.length);
            this._element = 'Fire';
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = Number(this.weight) * Number(this.melonSort.length);
            this._element = 'Earth';
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elementIndex = Number(this.weight) * Number(this.melonSort.length);
            this._element = 'Air';
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `Element: ${this._element}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._element = 'Water';
        }

        morph() {
            let elements = ['Fire', 'Earth', 'Air', 'Water'];
            this._index = Melolemonmelon.prototype.index || 0;
            this._element = elements[this._index % 4];
            Melolemonmelon.prototype.index = this._index + 1;
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Airmelon,
        Earthmelon,
        Melolemonmelon
    }
}
//Test the code
// let r = new Melolemonmelon(25,'sort');
// console.log(r._element);