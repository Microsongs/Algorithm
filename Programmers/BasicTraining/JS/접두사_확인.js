// https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string, is_prefix) {
  let answer = [];
  for (let i = 0; i < my_string.length; i++)
    answer.push(my_string.slice(0, i + 1));
  return answer.includes(is_prefix) === true ? 1 : 0;
}

// 추가 공부사항
// includes() -> 배열이 특정 요소를 포함하고 있는지 여부를 판단하여 true 또는 false 반환
// +my_string.startsWith(is_prefix) 로도 간단하게 있는지 여부 확인 가능 + 앞에 +로 true/false를 1/0으로 변환 가능
