// import _ from 'lodash' // From 'node_modules'
// import getType from './getType'
// import chkType from './getType' // default로 나가는건 내 맘대로 이름 지어도 됨
// import {random, user as lukaid} from './getRandom' // 이름이 필요한 함수는 {}로 묶어야 댐
// import * as R from './getRandom' // *를 와일드카드라고도 불림, 모든 내보내기 데이터를 가져옴


// 기본통로 default로 지정된 함수는 하나의 데이터만 취급
// 이름 지정하면 몇개든 ok

// console.log(_.camelCase('the hello world'))
// console.log(chkType([1, 2, 3]))
// console.log(random(), random())
// console.log(R)



// JSON (JavaScript Object Notation)

// import myData from './myData.json'
// json은 엄밀히 문자 데이터임, 파싱하여 객체로 읽음
// console.log(myData)

// 객체데이터의 속성은 ""로 묶어도 됨, 특수기호 쓸때 유용
// const user = {
//   name: 'Lukaid',
//   age: 28,
//   emails: [
//     'dltjddn0115@naver.com',
//     'crescent3859@gmail.com'
//     ]
// }
// console.log('user', user)

// const str = JSON.stringify(user) // JSON 포맷으로 문자 데이터화 시켜주는 함수
// console.log('str', str)
// console.log(typeof str)

// const obj = JSON.parse(str) // 다시 객체 데이터로 파싱
// console.log('obj', obj)

// localStorage에 데이터를 저장할 때는 문자 데이터로 바꿔서 저장해야 됨
// localStorage.setItem('user', JSON.stringify(user))

// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')


// const str = localStorage.getItem('user')
// const obj = JSON.parse(str)
// obj.age = 22
// console.log(obj)

// localStorage.setItem('user', JSON.stringify(obj))




import axios from 'axios'

function fetchMovies() {
  axios.get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen').then(res => {
    console.log(res)
    const h1El = document.querySelector('h1')
    const imgEl = document.querySelector('img')
    h1El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster
  })
}

fetchMovies()