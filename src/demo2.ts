class Info {
    static name1: string = "jack";
    name2: string = "tony";
    name3: string = "";
    name4!: string;
    constructor(_name: string) {
        this.name4 = _name;
    }
    static getName = () => "我是静态方法"
    getName2 = () => `我是成员方法${this.name2}`
    set name5(value) {
        this.name4 = value;
    }
    get name5() {
        return this.name4
    }
}

const jackson = new Info("jackson");
console.log(jackson.name2);
console.log(jackson.name3);
console.log(jackson.name4);


