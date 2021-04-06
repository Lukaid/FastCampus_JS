// let myName = "Lukaid";
// let email = 'crescent3859@gmail.com'
// let hello = `Hello ${myName}?!`

// console.log(myName);
// console.log(email);
// console.log(hello);


// let user = {
//   name: "Lukaid",
//   age: 28,

// };

// console.log(user);
// console.log(user.age);
// console.log(user.name);


// let boxEl = document.querySelector('.box');

// console.log(boxEl)

// boxEl.addEventListener('click', function () {
//   console.log('Click!!');
//   boxEl.classList.add('active');
//   console.log(
//     boxEl.classList.contains('active')
//   );
//   boxEl.classList.remove('active')
//   console.log(
//     boxEl.classList.contains('active')
//   );
//   });


// const boxEls = document.querySelectorAll('.box');

// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`)
//   console.log(index, boxEl);
// })


const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = 'Lukaid';
console.log(boxEl.textContent);



const a = 'Hello~';
const b = a.split('').reverse().join('');
console.log(a);
console.log(b);