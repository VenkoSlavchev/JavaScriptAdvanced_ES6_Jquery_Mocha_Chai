"use strict";
class Textbox {
    constructor(selector, regex) {
        this.selector = selector;
        this._elements = $(selector);
        this._invalidSymbols = regex;

        let classThis = this;
        $(selector).on('input change', function () {
            classThis._value = $(this).val();
        })
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        $(this.selector).val(newValue);
        this._value = newValue
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        if (this._value.match(this._invalidSymbols) !== null) {
            return false
        } else {
            return true;
        }
    }
}

//Test the code
// let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
//
// let inputs = $('.textbox');
//
// inputs.on('input', function () {
//     console.log(textbox.value);
// });
