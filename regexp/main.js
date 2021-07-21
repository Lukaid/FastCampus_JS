const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`

// const regexp = new RegExp('the', 'gi')
// const regexp = /fox/gi
// console.log(str.match(regexp))
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)

// console.log(str.match(/the/gi))

const h = `  the hello  world   !`

console.log(str.match(/\bf\w{1,}\b/gmi))

console.log(h.replace(/\s/gmi, ""))


console.log(str.match(/.{1,}(?=@)/g))
console.log(str.match(/(?<=@).{1,}/g))
