'use strict';
class Entity{
    constructor (name){
        // if(new.target === Entity){
        //     throw new Error('Entity is abstract class');
        // }
        this.name = name;
    }
}

module.exports = Entity;
