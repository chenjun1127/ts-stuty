// 泛型类
(() => {
  class CalcArray<T> {
    private arr: T[] = [];
    add(value: T) {
      this.arr.push(value);
    }
    getValue(): T[] {
      return this.arr;
    }
  }
  const res = new CalcArray();
  res.add(1);
  res.add('1');
  console.log(res.getValue());
})();
