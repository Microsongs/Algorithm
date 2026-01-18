// https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n, control) {
  for (let i of control) {
    switch (i) {
      case "w":
        n += 1;
        break;
      case "s":
        n -= 1;
        break;
      case "d":
        n += 10;
        break;
      case "a":
        n -= 10;
        break;
    }
  }
  return n;
}
// 추가 공부사항
/*
const moves = {
w: (n) => n+1,
s: (n) => n-1,
d: (n) => n+10,
a: (n) => n-10,
}
const solution = (n, control) => {
    return [...control].reduce((prev, op) => moves[op](prev), n)}
// [...control] : control 문자열을 문자 배열로 변환
// reduce 메서드를 사용하여 각 문자를 순회하며 n 값을 갱신
// */
