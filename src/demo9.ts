(() => {
  type StringMap<T> = {
    [p in keyof T]: string;
  };
  // 映射类型允许你从一个旧的类型，生成一个新的类型。
  function showType(arg: StringMap<{ id: number; name: string }>) {
    console.log(arg);
  }
  showType({ id: '001', name: 'test' });
  interface Info {
    id: number;
    name: string;
  }
  type typeInfo1 = StringMap<Info>;
  const info: typeInfo1 = {
    id: '002',
    name: 'jack'
  };
  console.log(info);
})();
