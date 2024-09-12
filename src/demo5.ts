(() => {
  // 泛型
  const calcArray = <T>(data: T): T[] => {
    let list: T[] = [];
    for (let i = 0; i < 3; i++) {
      list.push(data);
    }
    return list;
  };
  console.log(calcArray<number>(1));
  console.log(calcArray<string>('china'));
  interface Props {
    name: string;
    age: number;
  }

  type info = {
    address: string;
    phone: number;
  };
  console.log(calcArray<Props>({ name: 'jack', age: 30 }));
  console.log(calcArray<info>({ address: '广东深圳', phone: 13562563254 }));
})();
