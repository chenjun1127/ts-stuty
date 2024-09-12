namespace MyUserInfo {
  export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
}
(() => {
  const person = {
    userName: 'Alice',
    age: 30,
    address: '123 Main St'
  };

  const userName = MyUserInfo.getProperty(person, 'userName'); // 类型为 string
  const age = MyUserInfo.getProperty(person, 'age'); // 类型为 number
  const address = MyUserInfo.getProperty(person, 'address'); // 类型为 string
  console.log(userName, age, address);
})();
