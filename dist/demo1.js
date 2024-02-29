"use strict";
let obj = { a: 1, b: null };
obj.a = 25;
console.log(obj);
// 数组
let arr = [1, 3.4];
console.log(arr);
// 元组
let arr1 = [1, '1'];
// 参数类型
const setInfo = (name, age = 18, phone) => console.log(name, age);
setInfo('jack', 123213);
// 剩余参数
const allCount = (...prop) => console.log(`数字总和为：${prop.reduce((a, b) => (a += b), 10)}`);
allCount(1, 2, 3, 4);
