"use strict";
// 多类型传参
(() => {
    const calcArray = (name, age) => {
        const res = { name, age };
        return [res];
    };
    console.log(calcArray('jack', 30));
})();
