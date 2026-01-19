// https://school.programmers.co.kr/learn/courses/30/lessons/181919

function solution(n) {
  let answer = [];
  while (n != 1) {
    answer.push(n);
    n = n % 2 == 0 ? n / 2 : 3 * n + 1;
  }
  answer.push(n);
  return answer;
}

// 추가 공부사항 -> 재귀함수 사용
// function solution(n, arr = []){
// arr.push(n);
// if(n === 1) return arr;
// if(n % 2 === 0) return solution(n / 2, arr);
// else return solution(3 * n + 1, arr);
// }
