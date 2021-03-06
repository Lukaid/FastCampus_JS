// import getType from './getType'
// import getRandom from './getRandom'

// console.log(typeof "Hello World")
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])

// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))

// 산술연산자

// console.log(1+2)
// console.log(1-2)
// console.log(1*2)
// console.log(1/2)
// console.log(1%2)

// 할당연산자

// const a = 2; // const는 재할당이 불가능

// let b = 3; // let은 재할당 가능
// b += 1
// b -= 1
// b *= 2
// b /= 3
// b %= 2

// console.log(a, b)

// 비교연산자

// const a = 1
// const b = 3

// console.log(a === b) // 일치는 세개..?

// function isEqual(x, y) {
//   return x === y
// }

// console.log(isEqual(1, 1))
// console.log(isEqual(2, '2'))

// console.log(a !== b)

// 논리연산자

// const a = 1===1
// const b = 'AB'==='AB'
// const c = false

// console.log(a)
// console.log(b)
// console.log(c)

// console.log('&& :', a && b)
// console.log('&& :', a && b && c)
// console.log('|| : ', a || b || c)
// console.log('! : ', !a)

// 삼항연산자

// const a = 1 < 2

// if (a) {
//   console.log('참')
// } else {
//   console.log('거짓')
// }

// console.log(a ? '참' : '거짓')

// 조건문

// const a = getRandom()

// if (a === 0) {
//   console.log('a is 0')
// } else if (a === 2) {
//   console.log('a is 2')
// } else if (a === 4) {
//   console.log('a is 4')
// }else {
//   console.log('rest .. ')
// }

// // 조건문 switch

// switch (a) {
//   case 0:
//     console.log('a is 0')
//     break

//   case 2:
//     console.log('a is 2')
//     break

//   case 4:
//     console.log('a is 4')
//     break

//   default:
//     console.log('rest ...')
// }

// 반복문 
// for (시작조건; 종료조건; 변화조건) {}
// 종료조건이 false면 종료, while문 같은건가?

// const ulEl = document.querySelector('ul')

// for (let i = 0; i < 10; i += 1) {
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   if (i % 2 === 1) {
//     li.addEventListener('click', function () {
//       console.log(li.textContent)
//     })
//   }
//   ulEl.appendChild(li)
// }


// 변수 유효범위 (Variable Scope)
// var 함수레벨의 유효범위, let, const 블록레벨의 유효범위
// 블록레벨의 유효범위를 만드는 것이 더 효과적임

// function scope() {
  
//   if (true) {
//     var a = 123
//   }
//   console.log(a)
// }
// scope()


// 형 변환
// == 는 동등연산자, 형변환이 일어남, 안쓰는 것을 권장함

// const a = 1
// const b = '1'

// console.log(a == b)

// Truthy(참 같은 값)
// true, {}, [], 1, 2, 'false', -12, '3.14' ...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

// if (1) {
//   console.log(123)
// }


// 함수 복습
// return후 함수 종료
// 함수 선언, 기명함수
// function sum(x, y) {
//   return x + y
// } 

// //함수 표현, 익명함수
// const sum_2 = function (x, y) {
//   return x + y
// } 

// console.log(sum(1, 3) + sum(4, 12))

// const a = sum(1, 3)
// const b = sum(4, 12)

// console.log(a + b)

// console.log(sum_2(1, 2))

// function test() {
//   console.log(arguments)
//   return arguments[0] + arguments[1]
// } 

// console.log(test(7, 3))


// 화살표 함수
// () => {} vs function () {}

// const double = function (x) {
//   return x * 2
// }
// console.log('double: ', double(7))

// const doubleArrow = (x, y) => x * 2 + y
// console.log('doubleArrow: ', doubleArrow(7, 2))

// 즉시 실행 함수
// IIFE, Immediately-Invoked Function Expression

// const a = 7
// function double() {
//   console.log(a*2)
// }

// double();

// // (function) ()
// (function () {
//   console.log(a*2)
// }) ();

// (function () ) 권장
// (function () {
//   console.log(a*2)
// } () );

// 호이스팅 (Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 걍 함수먼저 읽고 나머지 읽는듯
// 익명함수(함수표현)으로는 이거 불가

// const a = 7

// double()

// function double () {
//   console.log(a*2)
// }

// 타이머함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행, ms
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

// const timer = setInterval(() => {
//   console.log('Lukaid')
// }, 1000)

// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//   clearInterval(timer)
// })


// 콜백
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

// function timeout(callback) {
//   setTimeout(() => {
//     console.log('Lukaid!')
//     callback()
//   }, 3000)
// }

// timeout(()=>{
//   console.log('Done!')
// })


// 생성자 함수
// 객체 데이터의 구조
// firstName: 'SeongWoo', -> property
// function이 드가 있으면 method
// 얘네를 통틀어 member라고 함

// const lukaid = {
//   firstName: 'SeongWoo',
//   lastName: 'Lee',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// console.log(lukaid.getFullName())

// const amy = {
//   firstName: 'Amy',
//   lastName: 'Clarke',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// console.log(amy.getFullName())

// 객체 데이터가 생성되는 생성자 함수, 생성자 함수는 pascal case로 작성
// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }
// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// const lukaid = new User('SeongWoo', 'Lee')
// const Amy = new User('Amy', 'Clarke')
// const Neo = new User('Neo', 'Smith')

// // const lukaid(인스턴스) = new User('SeongWoo', 'Lee')

// console.log(lukaid.getFullName())
// console.log(Amy.getFullName())
// console.log(Neo.getFullName())

// this
// 일반(normal) 함수는 호출 위치에서 따라 this 정의!
// 화살표(arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// const lukaid = {
//   name: 'SeongWoo',
//   normal: function () {  : function 생략가능
//     console.log(this.name)
//   },
//   arrow: () => {
//     console.log(this.name)
//   }
// }
// lukaid.normal() // 메소드 호출
// lukaid.arrow()

// const amy = {
//   name: 'Amy',
//   normal: lukaid.normal,  // 함수 할당이라 괄호 안침..
//   arrow: lukaid.arrow
// }

// amy.normal()
// amy.arrow()

// pascal case 함수이니 생성자 함수 일 것
// function User(name) {
//   this.name = name
// }

// User.prototype.normal = function () {
//   console.log(this.name)
// }
// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const lukaid = new User('lukaid')

// lukaid.normal()
// lukaid.arrow()

// const timer = {
//   name: 'lukaid!!',
//   timeout: function () {
//     // setTimeout(function () {
//     //   console.log(this.name)
//     // }, 2000)

//     setTimeout(() => {
//       console.log(this.name)
//     }, 2000)

//   }
// }
// timer.timeout()


// ES6 Classes (파이썬의 그것과 비슷)

// function User(first, last) {
//   this.firstName = first,
//   this.lastName = last
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// class User {
//   constructor(first, last) {
//     this.firstName = first,
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const lukaid = new User('SeongWoo', 'lee')
// const amy = new User('A', 'B')
// const neo = new User('C', 'D')

// console.log(lukaid)
// console.log(amy.getFullName())
// console.log(neo.getFullName())


// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel)
//   }
// }
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicycle = new Bicycle('세발자전거', 3)
// console.log(myBicycle)
// console.log(daughtersBicycle)

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel)
//     this.license = license
//   }
// }
// const myCar = new Car('벤쓰', 4, '2종 보통')
// const daughtersCar = new Car('포르쉐', 4, false)
// console.log(myCar)
// console.log(daughtersCar)