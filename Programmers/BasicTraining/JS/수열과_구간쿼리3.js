// https://school.programmers.co.kr/learn/courses/30/lessons/181924

function solution(arr, queries) {
  for (let query of queries) {
    let temp = arr[query[0]];
    arr[query[0]] = arr[query[1]];
    arr[query[1]] = temp;
  }
  return arr;
}

// 추가 공부사항
// foreach 사용하여 더 간단히 표현 가능
/*
    queries.forEach(([i, j]) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        });
    return arr;
*/
