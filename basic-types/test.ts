// let decimal: number = 1212

// let hex: number = 0xf00d

// let binary: number = 0b1010

// let octal: number = 0o744

// let notANumber: number = NaN

// let underScoreNum: number = 1_000_000


// // string

// let myName: string = "mark"

console.log(Symbol('foo') === Symbol('foo'))

const sym = Symbol()

const obj = {
  [sym]: "value",
}

obj[sym]

let v: void = undefined

let union: string | null = null

union = "mark"

const person1 = { name: "mark", age: 39 }

const person2 = Object.create({ name: "mark", age: 39 })




// let list: number[] = [1, 2, 3] // 권장
// let list: Array<number> = [1, 2, 3]
let list: (number | string)[] = [1, 2, 3, 'a']

let x: [string, number];

x = ['hello', 111]


// x[3]

const person: [string, number] = ['mark', 23]

const [first, second] = person




function returnAny(message: any): any {
  console.log(message)
}

const any1 = returnAny('리턴은 아무거나')

any1.toString()

let looselyTyped: any = {}

const d = looselyTyped.a.b.c.d

function leakingAny(obj: any) {
  const a:number = obj.number
  const b = a + 1
  return b
}

const c = leakingAny({num:0})
// c.indexOf("0")

declare const maybe: unknown

// const aNumber: number = maybe

if (maybe === true) {
  const aBoolean: boolean = maybe
  
  // const aString: string = maybe
}

if (typeof maybe === 'string') {
  // const aBoolean: boolean = maybe
  
  const aString: string = maybe
}

function error(message:string): never {
  throw new Error(message)
}

function fail() {
  return error("failed")
}

function infiniteLoop(): never {
  while(true) {}
}

let a: string =  "hello"

if (typeof a !== 'string') {
  a
}