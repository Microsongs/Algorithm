// https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string, m, c) {
  let answer = "";
  for (let i = 0; i < my_string.length; i += m) answer += my_string[i + c - 1];
  return answer;
}

// 추가 공부사항
// 구조분해할당 + filter 메서드 사용
// return [...my_string].filter((_, idx) => idx % m === c - 1).join('');
