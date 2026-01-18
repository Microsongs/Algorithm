// https://school.programmers.co.kr/learn/courses/30/lessons/181927

function solution(num_list) {
  num_list[num_list.length - 1] > num_list[num_list.length - 2]
    ? num_list.push(
        num_list[num_list.length - 1] - num_list[num_list.length - 2],
      )
    : num_list.push(num_list[num_list.length - 1] * 2);

  return num_list;
}

// 추가 공부사항
/*
    const [a, b] = [...num_list].reverse();
    return [...num_list, a>b ? (a-b) : a*2];
    // num_list의 마지막 두 요소를 역순으로 배열에 할당
    // a = 마지막 요소, b = 마지막에서 두 번째 요소
    // 이후 num_list에 조건에 따른 값 추가하여 반환
*/
