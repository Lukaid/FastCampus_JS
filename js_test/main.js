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

const userAge = {
    // key: value
    name: 'Lukaid',
    age: 29
}
const userEmail = {
    name: 'Lukaid',
    email: 'dltjddn0115@naver.com'
}

// userAge.assign() 이렇게 사용 불가, prototype이 아님
// const target = Object.assign(userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(target === userAge) // userAge를 반환한 것이 target, 두 변수 모두 같은 메모리 주소를 가르킴

// 첫번째 인수에 빈 객체를 넣으면 원본 객체는 유지됨
const target = Object.assign({}, userAge, userEmail)
console.log(target)
console.log(userAge)
console.log(target === userAge) // userAge를 반환한 것이 target, 두 변수 모두 같은 메모리 주소를 가르킴



const a = { k:123 }
const b = { k:123 }
console.log(a === b) // 내용이 같아도, 다른 객체임, 메모리 주소가 다름

const c = '1'
const d = '1'
console.log(c === d)


const user = {
    // key: value
    name: 'Lukaid',
    age: 29,
    email: 'dltjddn0115@naver.com'
}

const keys = Object.keys(user)
console.log(keys)

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)