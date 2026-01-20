// https://school.programmers.co.kr/learn/courses/30/lessons/181917

const calc = {
  V: (x, y) => (x !== false || y !== false ? true : false),
  N: (x, y) => (x !== true || y !== true ? false : true),
};

function solution(x1, x2, x3, x4) {
  return calc.N(calc.V(x1, x2), calc.V(x3, x4));
}

// 추가 공부사항
// return (x1 || x2) && (x3 || x4); 로 가능
