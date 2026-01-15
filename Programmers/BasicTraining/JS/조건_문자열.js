// https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq, eq, n, m) {
  let answer = ineq === "<" ? n < m : n > m;
  if (eq === "=" && n === m) answer = 1;

  return Number(answer);
}

// 추가 공부사항
// 1. 이하 방법으로 가독성 좋게 표현 가능
/*
    const operations = {
    '>=': (a, b) => a >= b,
    '<=': (a, b) => a <= b,
    '>!': (a, b) => a > b,
    '<!': (a, b) => a < b,
  };
    return operations[ineq + eq](n, m) ? 1 : 0;
*/
// 2. 추가로 eval()함수 호출 비권장(보안 이슈) + 기본에 충실하자
