"use strict";
// 你可以使用 NonFunctionProperties 类型来从一个包含各种属性（包括函数属性）的类型中筛选出所有非函数属性。
(() => {
    const example = {
        name: 'Alice',
        age: 30
        // greet 属性被排除，因此这里不会有 greet 方法
    };
    console.log(example);
})();
