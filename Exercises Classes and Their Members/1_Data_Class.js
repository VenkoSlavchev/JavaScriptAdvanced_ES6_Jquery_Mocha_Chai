'use strict';
class Data {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }

}
//Test the code
// let r = new Date('GET', 'http://google.com', 'HTTP/1.1', '');
// console.log(r.hasOwnProperty('method'));
