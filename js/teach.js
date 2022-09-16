class Person {

  // # 문법 추가 : private 프로퍼티로 셋팅
  // class 내부에서는 내용을 확인가능
  // new 를 통해서 생성된 인스턴스에서는 내용을 확인 불가능
  lang = 'Korean';
  static city = 'Daegu';

  // 생성자 : new Person() 을 
  // global 에서 실행시 무조건 실행
  constructor(_age, _firstName, _lastName, _lang){
    this.age = _age;
    this.firstName = _firstName;
    this.lastName = _lastName;    
    this.lang = _lang;
  }

  // 인스턴스 메서드 : 인스턴스명.메서드명();
  showAge() {
    console.log(this.age);
  }

  // 클래스 메서드(정적 메서드) : 클래스명.메서드명();
  static showClassVersion() {
    console.log('Person 클래스 버전 1.0');
  }

  // firstName, lastName
  // 인스턴스 메서드로서 값을 출력한다
  get fullName() {
    return `${this.firstName} ${this.lastName} 이고 ${this.age}살이다`    
  }
  // 인스턴스 메서드로 값을 셋한다.
  set fullName(_myName) {    
    [this.firstName, this.lastName] = _myName.split( ' ' );
  }
}



let hong = new Person(20, '홍', '길동', '한국어');
hong.showAge();
hong.fullName = '고 영수';
console.log(hong.fullName);

//hong.showClassVersion();
Person.showClassVersion();

// 클래스 프로퍼티가 아니므로 접근 불가
console.log(Person.lang);
// 클래스 필드 영역에 설정하였고, 
// static 이 아니므로 내부에서는 this로 접근
// static 이 아니므로 외부에서는 인스턴스로 접근
console.log(hong.lang); //Uncaught SyntaxError: Private field '#lang' must be declared in an enclosing class
// 클래스 프로퍼티 이므로 클래스명으로 접근
console.log(Person.city);