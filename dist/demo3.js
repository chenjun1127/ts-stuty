"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    ;
}
class Pig extends Animal {
    constructor(name) {
        super(name);
        this.age = 0;
    }
    setAge(age) {
        this.age = age;
    }
    say() {
        console.log(`我的名字是${this.name},年龄是${this.age}`);
    }
}
let pig = new Pig("八戒");
pig.setAge(20);
pig.say();
