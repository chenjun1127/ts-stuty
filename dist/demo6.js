"use strict";
// 多类型传参
const calcArray1 = (name, age) => {
    let list = [];
    const res = { name, age };
    return [res];
};
console.log(calcArray1("jack", 30));
