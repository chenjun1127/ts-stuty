"use strict";
const map = { a: 1 };
console.log(map);
let employees = {
    '1': { name: 'jack', age: 30, address: '' }
};
console.log(employees);
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
    name: 'James',
    age: 20
};
console.log(person4);
const person5 = {
    address: '广东省市南山区智园'
};
const person6 = 'name';
console.log(person6);
const person7 = 'age'; //"age"|"address"
// 更多用法参考：https://www.typescriptlang.org/docs/handbook/utility-types.html#awaitedtype
