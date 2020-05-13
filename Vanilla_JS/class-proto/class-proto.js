class PersonC {   // const PersonC = class PersonC
  constructor(name, id){
    this.name = name;
    this.id = id;
  }
  getDetails() {
    return `${this.name} :: ${this.id}`;
  }
}


const Daesang = new PersonC('Daesang', 'eotkd4791');
console.log(Daesang.getDetails());


class EmployeeC extends PersonC {   // const EmployeeC = class extends PersonC
  constructor(name, id, salary) {
    super(name, id);
    this.salary = salary;
  }
  employeeInfo() {
    return `${this.name} :: ${this.id} :: ${this.salary}`;
  }
}


const Stef = new EmployeeC('Stef', 'daesang', 6000);

console.log(Stef.employeeInfo());
console.log(Stef.getDetails());



/*  Class
-------------------------------------------------------------------*/



/*-------------------------------------------------------------------
    Prototype                                                      */



const PersonP = function(name, id) {
  this.name = name;
  this.id = id;
}
PersonP.prototype.getDetails = function() {
  return `${this.name} :: ${this.id}`;
}

const Daesaame = new PersonP('Daesaame', 'Holali'); //new 연산자로 함수를 호출하면 생성자로서 호출한다는 의미이다.
console.log(Daesaame.getDetails());


const EmployeeP = function(name, id, salary) {
  PersonP.call(this, name, id);  //super(name, id)와 같다.
  this.salary = salary;
  //constructor와 같은 역할을 한다. PersonP의 프로퍼티인 name,id를 가져온다. this는 EmployeeP를 의미한다.
}

Object.setPrototypeOf(EmployeeP, PersonP.prototype); // extends

EmployeeP.prototype.employeeInfo = function() {
  return `${this.name} :: ${this.id} :: ${this.salary}`;
}

const Sasimi = new EmployeeP('Sasimi', 'Sasimz', 8000);

console.log(Sasimi.employeeInfo());

console.log(Sasimi.constructor.getDetails.call(Sasimi));
console.log(PersonP.prototype.getDetails.call(Sasimi));
      
