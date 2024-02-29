"use strict";
// 泛型类
class calcArray2 {
    constructor() {
        this.arr = [];
    }
    add(value) {
        this.arr.push(value);
    }
    getValue() {
        return this.arr;
    }
}
const res = new calcArray2();
res.add(1);
res.add('1');
console.log(res.getValue());
