// https://school.programmers.co.kr/learn/courses/30/lessons/181907

function solution(my_string, n) {
  return my_string.slice(0, n);
}

// 추가 공부사항
// slice -> 문자열의 일부를 추출하여 새로운 문자열 반환
// slice는 음수도 지원 -> my_string.slice(-n) 으로도 가능
// substring -> 시작 인덱스와 길이를 지정하여 문자열의 일부를 추출
