// 多类型传参
const calcArray1 = <S, T>(name: S, age: T): { name: S, age: T }[] => {
    let list: { name: S, age: T }[] = [];
    const res: { name: S, age: T } = { name, age };
    return [res];
}
console.log(calcArray1<string, number>("jack", 30));