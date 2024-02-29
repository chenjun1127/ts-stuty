let obj: { a: number; b: any } = { a: 1, b: null };
obj.a = 25;
console.log(obj);
// 数组
let arr: number[] = [1, 3.4];
console.log(arr);
// 元组
let arr1: [number, string] = [1, '1'];
// 参数类型
const setInfo = (name: string, age: number = 18, phone?: number) => console.log(name, age);
setInfo('jack', 123213);
// 剩余参数
const allCount = (...prop: number[]) => console.log(`数字总和为：${prop.reduce((a, b) => (a += b), 10)}`);
allCount(1, 2, 3, 4);
