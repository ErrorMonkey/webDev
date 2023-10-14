const cat1 = {
  name: "옥토캣",
  age: 15,
  mew: function () {
    console.log("fatal: noob.");
  },
};

const cat2 = {
  name: "메가캣",
  age: 15,
  mew: function () {
    console.log("fatal: noob.");
  },
};

const cat3 = {
  name: "듄옥캣",
  age: 15,
  mew: function () {
    console.log("fatal: noob.");
  },
};

// PascalCase 규칙을 이용해서 식별자 생성
// camelCase에서 첫글자도 대문자인 방식
class Cat {
  // 생성자: 메소드의 일종
  // 메소드 중에서 Cat 클래스를 이용해서 객체를 만드는 순간 호출되는 메소드
  constructor(name, age, msg) {
    this.name = name;
    this.age = age;
    this.msg = msg;
  }

  // 메소드
  mew() {
    console.log(`fatal: ${this.msg}`);
  }

  info() {
    console.log(`이름은: ${this.name}, 나이는: ${this.age}`);
  }
}

const cat4 = new Cat("그린치옥캣", 200, "haha");

cat4.mew();
cat4.info();
