// https://school.programmers.co.kr/learn/courses/30/lessons/181925

const moved = (n) => {
  switch (n) {
    case -10:
      return "a";
    case -1:
      return "s";
    case 1:
      return "w";
    case 10:
      return "d";
  }
};

function solution(numLog) {
  var answer = "";
  for (let i = 1; i < numLog.length; i++)
    answer += moved(numLog[i] - numLog[i - 1]);
  return answer;
}

// 추가 공부사항
/*
    const moved = {
        '1': 'w',
        '-1': 's',
        '10': 'd',
        '-10': 'a'
    }
    return numLog.slice(1).map((num, idx) =>
        moved[num - numLog[idx]]).join('');
    // numLog.slice(1) : numLog 배열에서 첫 번째 요소를 제외한 나머지 요소들로 새로운 배열 생성
    // map 메서드를 사용하여 각 요소에 대해 이전 요소와의 차이를 계산하고, moved 객체를 참조하여 해당하는 문자로 변환
    // join('') 메서드를 사용하여 문자 배열을 하나의 문자열로 결합
*/
