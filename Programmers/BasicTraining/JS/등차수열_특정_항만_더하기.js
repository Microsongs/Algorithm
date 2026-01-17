// https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
  var answer = 0;
  for (let i = 0; i < included.length; i++) {
    if (included[i] === true) answer += a;
    a += d;
  }
  return answer;
}

// 추가 공부사항
// return included.reduce((acc, cur, idx) => cur ? acc + (a + d * idx) : acc, 0);
// reduce -> 누적값 acc, 현재값 cur, 인덱스 idx
// cur이 true일 때만 acc에 a + d * idx 값을 더해줌
