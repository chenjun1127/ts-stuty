abstract class Animal {
    constructor(public name: string) { };
    abstract setAge(age: number): void;
}
class Pig extends Animal {
    age = 0

    setAge(age: number): void {
        this.age = age;
    }
    constructor(name: string) {
        super(name);

    }
    say() {
        console.log(`我的名字是${this.name},年龄是${this.age}`);
    }
}

let pig = new Pig("八戒");
pig.setAge(20);
pig.say();