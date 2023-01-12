"use strict";
const map = { a: 1 };
console.log(map);
const person1 = {
    name: 'Jack'
};
console.log(person1);
const person2 = {
    name: 'Lucy',
    age: 20,
    address: 'China BeiJing'
};
console.log(person2);
const person3 = {
    name: 'Tony',
    age: 33,
    address: 'China GuangZhou'
};
// person3.age=25; 只读属性，不可赋值
console.log(person3);
const person4 = {
    name: "James",
    age: 20
};
console.log(person4);
// 更多用法参考：https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype
