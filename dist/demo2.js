"use strict";
(() => {
    class Info {
        constructor(_name) {
            this.name2 = 'tony';
            this.name3 = '';
            this.getName2 = () => `我是成员方法${this.name2}`;
            this.name4 = _name;
        }
        set name5(value) {
            this.name4 = value;
        }
        get name5() {
            return this.name4;
        }
    }
    Info.name1 = 'jack';
    Info.getName = () => '我是静态方法';
    const jackson = new Info('jackson');
    console.log(jackson.name2);
    console.log(jackson.name3);
    console.log(jackson.name4);
})();
