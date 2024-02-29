interface People {
  name: string;
  age: number;
  isSex: boolean;
  say(): string;
}

class Man implements People {
  name = '';
  age = 0;
  isSex = false;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say(): string {
    return this.name;
  }
}

var jack = new Man('jack', 20);

jack.say();

const stu = {
  name: 'XY',
  age: 22,
  isSex: true,

  say() {
    return '希望我们都能平安健康！';
  }
};

const generate = (stu: People) => {
  console.log(stu.say());
};

generate(stu);

class Child extends Man {
  height: string;
  weight: number;
  constructor(name: string, age: number, height: any, weight: any) {
    super(name, age);
    this.height = height;
    this.weight = weight;
  }
  sayInfo(): string {
    return `姓名：${super.say()},年龄：${this.age},身高:${this.height},体重:${this.weight}`;
  }
}

var monkey = new Child('monkey', 12, 178, 50);
console.log(monkey.sayInfo());
