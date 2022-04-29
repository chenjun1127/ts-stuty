"use strict";
class Man {
    constructor(name, age) {
        this.name = "";
        this.age = 0;
        this.isSex = false;
        this.name = name;
        this.age = age;
    }
    say() {
        return this.name;
    }
}
var jack = new Man("jack", 20);
jack.say();
const stu = {
    name: "XY",
    age: 22,
    isSex: true,
    say() {
        return "希望我们都能平安健康！";
    },
};
const geterate = (stu) => {
    console.log(stu.say());
};
geterate(stu);
class Child extends Man {
    constructor(name, age, height, weight) {
        super(name, age);
        this.height = height;
        this.weight = weight;
    }
    ;
    sayInfo() {
        return `姓名：${super.say()},年龄：${this.age},身高:${this.height},体重:${this.weight}`;
    }
}
var monkey = new Child("monkey", 12, 178, 50);
console.log(monkey.sayInfo());
