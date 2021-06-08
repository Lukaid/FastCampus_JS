import getType from './getType'
import getRandom from './getRandom'

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
function sum(x, y) {
  return x + y
} 

//함수 표현, 익명함수
const sum_2 = function (x, y) {
  return x + y
} 

console.log(sum(1, 3) + sum(4, 12))

const a = sum(1, 3)
const b = sum(4, 12)

console.log(a + b)

console.log(sum_2(1, 2))

function test() {
  console.log(arguments)
  return arguments[0] + arguments[1]
} 

console.log(test(7, 3))