// https://school.programmers.co.kr/learn/courses/30/lessons/181922

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (j % queries[i][2] === 0) {
        arr[j]++;
      }
    }
  }
  return arr;
}

//추가 공부사항 -> 구조분해할당 사용
/*
queries.forEach(([s, e, k]) => {    
    for (let i = s; i <= e; i++) {
        if (i % k === 0) arr[i]++;
    }}))
return arr;
*/
