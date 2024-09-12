"use strict";
(() => {
    // 映射类型允许你从一个旧的类型，生成一个新的类型。
    function showType(arg) {
        console.log(arg);
    }
    showType({ id: '001', name: 'test' });
    const info = {
        id: '002',
        name: 'jack'
    };
    console.log(info);
})();
