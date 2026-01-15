// https://school.programmers.co.kr/learn/courses/30/lessons/181933

function solution(a, b, flag) {
  var answer = flag === true ? a + b : a - b;
  return answer;
}

// 추가 공부사항
// flag부분은 어차피 값이 있으면 True므로 (flag) 로 간단히 표현 가능
