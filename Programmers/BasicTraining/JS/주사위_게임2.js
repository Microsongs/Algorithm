// https://school.programmers.co.kr/learn/courses/30/lessons/181930

const same = (a, b, c) => a + b + c;

const two_same = (a, b, c) => a ** 2 + b ** 2 + c ** 2;

const three_same = (a, b, c) => a ** 3 + b ** 3 + c ** 3;

function solution(a, b, c) {
  var answer = 0;
  if (a === b) {
    if (b === c) {
      answer = same(a, b, c) * two_same(a, b, c) * three_same(a, b, c);
    } else answer = same(a, b, c) * two_same(a, b, c);
  } else if (a === c || b === c) {
    answer = same(a, b, c) * two_same(a, b, c);
  } else answer = same(a, b, c);
  return answer;
}

// 추가 공부사항
/*
const ret = (a, b, c) => {
    const set = new Set([a, b, c]);
    switch([...set].length){
        case 1:
            return calc([a, b, c], 3);
        case 2:
            return calc([a, b, c], 2);
        case 3:
            return calc([a, b, c], 1);
    }};

const calc = (j, n=1) => {
    const [a, b, c] = j;
    let result = 1;
    for(let i=1; i<=n; i++){
        result *= a ** i + b ** i + c ** i;
    }
    return result;
}

// set -> 중복 없는 값들의 집합(set의 length로 중복 개수 파악 가능)
// switch문 -> case마다 다른 연산 수행
*/
