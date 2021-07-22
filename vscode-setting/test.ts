// let a = 'Mark' // 이렇게 쓰면 a에 string type이 자동으로 들어감

// a = 39 // 빨간 밑줄 감

let a: string // 이렇게 미리 type을 지정해 주는 것을 type annotation이라고 함

a = 'mark'
a = 39

function hello(b: number) {
  
}

hello(39)
hello('mark')