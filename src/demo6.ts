// 多类型传参
(() => {
  const calcArray = <S, T>(name: S, age: T): { name: S; age: T }[] => {
    const res: { name: S; age: T } = { name, age };
    return [res];
  };
  console.log(calcArray<string, number>('jack', 30));
})();
