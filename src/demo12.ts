const personObj = {
  userName: 'Alice',
  age: 30,
  address: '123 Main St'
};

namespace MyUserInfo {
  export function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
}
const userName = MyUserInfo.getProperty(personObj, 'userName'); // 类型为 string
const age = MyUserInfo.getProperty(personObj, 'age'); // 类型为 number
const address = MyUserInfo.getProperty(personObj, 'address'); // 类型为 string
