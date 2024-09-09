"use strict";
// 枚举可以做为值，也可以做为类型
var Roles;
(function (Roles) {
    Roles[Roles["SUPER_ADMIN"] = 0] = "SUPER_ADMIN";
    Roles[Roles["ADMIN"] = 3] = "ADMIN";
    Roles[Roles["USER"] = 4] = "USER";
})(Roles || (Roles = {}));
console.log(Roles);
