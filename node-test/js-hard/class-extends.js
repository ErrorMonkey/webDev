class House {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    console.log(
      `이 건물은 건축된 지 ${new Date().getFullYear() - this.year}년 됐습니다.`
    );
  }
}

const sesac = new House("새싹촌", "2020");
sesac.age();

class Apartment extends House {
  constructor(name, year, floor) {
    // super()는 부모의 생성자를 호출한다.
    // House 안의 construct(naem, year) 안에 변수를 넣어서 사용한다.
    super(name, year);
    this.floor = floor;
  }

  // 오버라이딩: 부모에 있는 메소드를 자식이 다시 정의하는 것.
  age() {
    super.age();
    console.log(`입주는 ${this.year + 1}년부터 시작했습니다.`);
  }
}

const apart = new Apartment("래미안 아파트", 2013, 25);
apart.age();
console.log(apart.floor);

// 오버라이딩 vs 오버로딩
// 오버로딩: 똑같은 이름으로 여러 개의 함수를 선언하는 것. 매개변수로 함수를 구분한다.
// 하지만 JS에서는 안 된다.
function test(a, b) {
  console.log(`a: ${a}, b: ${b}`);
}

function test(a, b, c) {
  console.log(`a: ${a}, b: ${b}, c: ${c}`);
}

test(1, 2);
test(3, 2, 5);
