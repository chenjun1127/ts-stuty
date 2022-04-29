"use strict";
// 泛型
const calcArray = (data) => {
    let list = [];
    for (let i = 0; i < 3; i++) {
        list.push(data);
    }
    return list;
};
console.log(calcArray(1));
console.log(calcArray("china"));
console.log(calcArray({ name: "jack", age: 30 }));
console.log(calcArray({ address: "广东深圳", phone: 13562563254 }));
