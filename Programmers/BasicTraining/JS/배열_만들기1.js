// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n, k) {
  let answer = [];
  for (let i = k; i <= n; i += k) answer.push(i);
  return answer;
}
