// 泛型类
class calcArray2<T> {
  private arr: T[] = [];
  add(value: T) {
    this.arr.push(value);
  }
  getValue(): T[] {
    return this.arr;
  }
}
const res = new calcArray2();
res.add(1);
res.add('1');
console.log(res.getValue());
