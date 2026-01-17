// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
  let sum = num_list.reduce((s = 0, i) => s + i, 0) ** 2;
  let multi = 1;
  num_list.forEach((i) => (multi *= i));
  return sum > multi ? 1 : 0;
}

// 추가 공부사항
// 굳이 reduce같은거 쓸 필요 없이
/*
let sum = 0, multi = 1;
for(const num of num_list){
    sum += num;
    multi *= num;
}
    return sum ** 2 > multi ? 1 : 0;}
*/
