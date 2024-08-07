"use strict";
const personObj = {
    userName: 'Alice',
    age: 30,
    address: '123 Main St'
};
var MyUserInfo;
(function (MyUserInfo) {
    function getProperty(obj, key) {
        return obj[key];
    }
    MyUserInfo.getProperty = getProperty;
})(MyUserInfo || (MyUserInfo = {}));
const userName = MyUserInfo.getProperty(personObj, 'userName'); // 类型为 string
const age = MyUserInfo.getProperty(personObj, 'age'); // 类型为 number
const address = MyUserInfo.getProperty(personObj, 'address'); // 类型为 string
