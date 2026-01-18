// https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr, queries) {
  let answer = [];
  for (let query of queries) {
    let temp = 9999999;
    for (let i = query[0]; i <= query[1]; i++) {
      temp =
        arr[i] > query[2] && temp - query[2] > arr[i] - query[2]
          ? arr[i]
          : temp;
    }
    answer.push(temp === 9999999 ? -1 : temp);
  }
  return answer;
}

// 추가 공부사항
// return queries.map(([s, e, k]) => arr.slice(s, e + 1)
// .filter((v) => v > k)
// .sort((a, b) => a - b)[0] || -1);
// queries 배열 각 요소에 대해 map 메서드를 사용하여 새로운 배열 생성
// 각 쿼리에서 시작 인덱스(s)와 끝 인덱스(e)를 사용하여 arr 배열의 해당 부분을 slice 메서드로 추출
// filter 메서드를 사용하여 k보다 큰 값들만 남김
// sort 메서드를 사용하여 오름차순으로 정렬한 후, 첫 번째 요소(가장 작은 값)를 선택
// 만약 조건에 맞는 값이 없다면 || 연산자를 사용하여 -1을 반환
