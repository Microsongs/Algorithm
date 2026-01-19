//https://school.programmers.co.kr/learn/courses/30/lessons/181920

function solution(start_num, end_num) {
  let arr = [];
  for (let i = start_num; i <= end_num; i++) arr.push(i);
  return arr;
}

// 추가 공부사항 -> Array 사용
// return Array(end_num - start_num + 1)
//         .fill(0)
//         .map((_, idx) => idx + start_num);
