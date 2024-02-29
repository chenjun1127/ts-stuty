interface UserInfo {
  age: number;
  name: string;
  sex: string;
  isSecure: boolean;
}
type desc = {
  age: number;
  address: string;
};

const a: keyof UserInfo = 'name'; //'age'|'name'|'sex'|'isSecure'
const b: keyof UserInfo & keyof desc = 'age'; //age
const c: Exclude<keyof UserInfo, 'name'> = 'isSecure'; // 'age'|'sex'|'isSecure'
const d: Extract<keyof UserInfo, 'name'> = 'name'; // 'name'
