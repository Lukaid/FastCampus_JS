// JS 데이터

// 데이터는 원래 new와 전역객체로 생성자를 만들어서 생성해야 함
// 근데 줜나 번거로우니까 자주 쓰는거는 걍 아래처럼 씀, 이걸 리터럴 방식이라고 부름

// string: "", '', ``
// number, boolean, undefined, null
// Array: []
// Object: {}


// const result = 'hello world!'.indexOf('lukaid')
// console.log(result)

// const str = '0123'

// console.log('0 1 2 3'.length)

// const str = 'hello world!'
// const str = '       lukaid@kau.kr '

// console.log(str.indexOf('world') !== -1)
// console.log(str.slice(6, -1))
// console.log(str.replace(' world!', ''))
// console.log(str.match(/.+(?=@)/)[0]) // 배열의 0번 항
// console.log(str.trim())


// const pi = 3.142592
// console.log(pi)

// const str = pi.toFixed(2)
// console.log(str)
// console.log(typeof str)

// const integer = parseInt(str)
// const float = parseFloat(str)
// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)

// 수학객체는 눈치껏 알아서

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(numbers[1])
// console.log(fruits[2])

// console.log([1, 2, 3].length)
// console.log([].length)


// console.log(numbers.find(el => el > 2))

// console.log(numbers.concat(fruits))
// console.log(numbers.concat(fruits).length)

// const test = numbers.concat(fruits)
// console.log(test)

// console.log(numbers)
// console.log(fruits)

// // 이건 array의 forEach 문법으로 외우자, 순서대로 element, index, array가 callback 함수로 드가고 다 필요한건 아님, 매개변수 이름은 내 맘대로 바까도 됨
// fruits.forEach(function (element, index, array) {
//     console.log(element, index, array)
// })

// .map()

// const a = fruits.forEach((fruit, idx) => {
//     console.log(`${fruit}-${idx}`)
// })
// console.log(a)

// // map 은 array를 반환, return이 꼭 필요
// // const b = fruits.map(function (fruit, idx) {
// //     return `${fruit}-${idx}`
// // })

// // 객체 데이터가 드간 배열 반환
// const b = fruits.map((fruit, idx) => ({
//     id: idx,
//     name: fruit
// }))
// console.log(b)

// const a = numbers.map(number => number < 3)
// console.log(a)
// // filter, true만 출력
// const b = numbers.filter(number => number < 3)
// console.log(b)

// const a = fruits.find(fruit => /^B/.test(fruit))
// console.log(a)

// const b = fruits.findIndex(fruit => /^B/.test(fruit))
// console.log(b)

// const a = numbers.includes(3)
// console.log(a)

// const b = fruits.includes('lukaid')
// console.log(b)

// .push() .unshift() .reverse() .splice()
// 원본 수정됨!!

// numbers.push(5) // append
// console.log(numbers)

// numbers.unshift(0) // 앞에 append
// console.log(numbers)

// numbers.reverse()
// fruits.reverse()
// console.log(numbers)
// console.log(fruits)

// numbers.splice(2, 1) // splice(idx, 지울 개수, 추가할 아이템)
// console.log(numbers)

// numbers.splice(2, 0, 99)
// console.log(numbers)


// prototype 이 없는 method 는 정적(static) 메소드
// {}.assign() 이렇게 사용 불가

// const userAge = {
//     // key: value
//     name: 'Lukaid',
//     age: 29
// }
// const userEmail = {
//     name: 'Lukaid',
//     email: 'dltjddn0115@naver.com'
// }

// userAge.assign() 이렇게 사용 불가, prototype이 아님
// const target = Object.assign(userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge) // userAge를 반환한 것이 target, 두 변수 모두 같은 메모리 주소를 가르킴

// 첫번째 인수에 빈 객체를 넣으면 원본 객체는 유지됨
// const target = Object.assign({}, userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge) // userAge를 반환한 것이 target, 두 변수 모두 같은 메모리 주소를 가르킴



// const a = { k:123 }
// const b = { k:123 }
// console.log(a === b) // 내용이 같아도, 다른 객체임, 메모리 주소가 다름

// const c = '1'
// const d = '1'
// console.log(c === d)


// const user = {
//     // key: value
//     name: 'Lukaid',
//     age: 29,
//     email: 'dltjddn0115@naver.com'
// }

// const keys = Object.keys(user)
// console.log(keys)

// console.log(user['email'])

// const values = keys.map(key => user[key])
// console.log(values)

// 구조 분해 할당
// const { name: lukaid, age, address = 'korea'} = user
// 객체 데이터에서 내가 원하는 value만 key로 꺼내 묵으면 됨

// console.log(`사용자의 이름은 ${lukaid}입니다.`)
// console.log(`${lukaid}의 나이는 ${age}세 입니다.`)
// console.log(`${lukaid}의 이메일 주소는 ${user.email}입니다.`)
// console.log(address)

// 객체 데이터 뿐 아니라 배열 데이터에도 사용 가능
// 배열은 순서를 꼭 지켜야 됨
// const fruits = ['Apple', 'Banana', 'Cherry']
// const [a, b, c, d] = fruits
// console.log(a, b, c, d)

// 전개 연산자

// const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
// console.log(fruits)
// console.log(...fruits)
// console.log('Apple', 'Banana', 'Cherry') 아렇게 전개한 것 처럼 출력

// function toObject(a, b, ...c) {
//     return {
//         a: a,
//         b: b,
//         c: c
//     }
// }
// 속성의 이름과 변수의 이름이 같으면 하나만 써도 됨
// const toObject = (a, b, ...c) => ({a, b, ...c})


// console.log(toObject(...fruits))



// 데이터 불변성 (Immuatblility) 한 번 만들어진 메모리는 불변함, 메모리 주소만 재 할당
// 원시데이터: String, Number, Boolean, undefined, null
// 참조제이터: Object, Array, Function

// let a = 1
// let b = 4
// console.log(a, b, a === b)
// b = a
// console.log(a, b, a === b)
// a = 7
// console.log(a, b, a === b)
// let c = 1
// console.log(b, c, b === c)

// // 참조데이터는 생긴게 똑같아도 같이 않을 수 있음
// let a = { k:1 }
// let b = { k:1 }
// console.log(a, b, a === b) // 생긴게 같아도 다른 주소로 할당 되어서 false
// a.k = 7
// b = a
// console.log(a, b, a === b)
// a.k = 2
// console.log(a, b, a === b)
// let c = b
// console.log(a, b, c, a === c)
// a.k = 9
// console.log(a, b, c, a === c)

import _ from 'lodash'

const user = {
    // key: value
    name: 'Lukaid',
    age: 29,
    emails: ['dltjddn0115@naver.com']
}

// const copyUser = user // 메모리 주소 복사
// const copyUser = Object.assign({}, user) // 대상객체, 출처객체 새로운 객체 데이터를 새로운 메모리 주소에 할당
// const copyUser = {...user} // 얘도 마찬가자로 메모리 주소 새로 할당하고 다시 객체 정의, 얕은복사
const copyUser = _.cloneDeep(user) // 깊은 복사, 이게 더 안전함

console.log(copyUser === user)


user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('---------')
console.log('---------')

user.emails.push('test@test.com') // 배열은 또 참조형 데이터니까 같은 메모리 주소를 공유하게 됨....
console.log(user.emails === copyUser.emails)

console.log('user', user)
console.log('copyUser', copyUser)