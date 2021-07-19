// default로 나가는 것은 함수의 이름을 지정해주지 않아도 됨

export default function (data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}