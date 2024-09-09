"use strict";
// 枚举可以做为值，也可以做为类型
var Roles;
(function (Roles) {
    Roles[Roles["SUPER_ADMIN"] = 0] = "SUPER_ADMIN";
    Roles[Roles["ADMIN"] = 3] = "ADMIN";
    Roles[Roles["USER"] = 4] = "USER";
})(Roles || (Roles = {}));
console.log(Roles);
var str;
(function (str) {
    str[str["A"] = 0] = "A";
    str[str["B"] = 1] = "B";
    str[str["C"] = 2] = "C";
    str[str["D"] = 3] = "D";
})(str || (str = {}));
const a1 = 'A';
console.log(a1);
