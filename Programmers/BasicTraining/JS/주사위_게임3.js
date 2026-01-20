// https://school.programmers.co.kr/learn/courses/30/lessons/181916

const result = (j, n) => {
  const [a, b, c, d] = j;
  if (n === 1) {
    return a * 1111;
  } else if (n === 2) {
    // 숫자 2개가 동일한 경우
    if ((a === b && c === d) || (a === c && b === d) || (a === d && b === c)) {
      const set = new Set(j);
      const temp = [...set];
      return (temp[0] + temp[1]) * Math.abs(temp[0] - temp[1]);
    }
    // 숫자 3 / 1
    else {
      console.log("d");

      if (a === b && b === c) return Math.pow(10 * a + d, 2);
      else if (a === b && b === d) return Math.pow(10 * a + c, 2);
      else if (a === c && c === d) return Math.pow(10 * a + b, 2);
      else if (b === c && c === d) return Math.pow(10 * b + a, 2);
    }
  } else if (n === 3) {
    // case a
    if (a === b) return c * d;
    if (a === c) return b * d;
    if (a === d) return b * c;
    if (b === c) return a * d;
    if (b === d) return a * c;
    if (c === d) return a * b;
  } else {
    return Math.min(...j);
  }
  return -1;
};

function solution(a, b, c, d) {
  let arr = [a, b, c, d];
  let set = new Set(arr);
  switch ([...set].length) {
    case 1:
      return result([a, b, c, d], 1);
    case 2:
      return result([a, b, c, d], 2);
    case 3:
      return result([a, b, c, d], 3);
    case 4:
      return result([a, b, c, d], 4);
  }
}

// 추가 공부사항
/*
function solution(a, b, c, d) {
  const dice = [a, b, c, d];
  
  // Step 1: 빈도수를 Map으로 정리
  // 예: [1,1,1,2] → Map { 1 => 3, 2 => 1 }
  // 배열을 순회하면서 set에 각 숫자의 출현 빈도수를 기록
  const freq = new Map();
  for (const num of dice) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // Step 2: 빈도 배열 만들기 (정렬) -> 정리한 Map에 대해 값(빈도수)들만 추출하여 내림차순 정렬
  // 예: [3, 1] 또는 [2, 2] 또는 [2, 1, 1] 등
  const counts = [...freq.values()].sort((x, y) => y - x);

  // Step 3: 케이스별 계산
  switch (counts.length) {
    // 케이스 1: 4개 모두 같음 [4]
    case 1:
      return a * 1111;

    // 케이스 2-1: 2개씩 같음 [2,2]
    // 케이스 2-2: 3개 같고 1개 다름 [3,1]
    case 2:
      if (counts[0] === 2 && counts[1] === 2) {
        // 2개씩 같은 경우: (a+b) * |a-b|
        const [num1, num2] = [...freq.keys()];
        return (num1 + num2) * Math.abs(num1 - num2);
      } else {
        // 3개 같고 1개 다른 경우: (3개 수*10 + 1개 수)^2
        const [triple] = [...freq.entries()].find(([, c]) => c === 3);
        const [single] = [...freq.entries()].find(([, c]) => c === 1);
        return (10 * triple + single) ** 2;
      }

    // 케이스 3: 2개만 같음 [2,1,1]
    // 같지 않은 두 수의 곱
    case 3:
      const [paired] = [...freq.entries()].find(([, c]) => c === 2);
      const singles = [...freq.entries()]
        .filter(([, c]) => c === 1)
        .map(([num]) => num);
      return singles[0] * singles[1];

    // 케이스 4: 모두 다름 [1,1,1,1]
    case 4:
      return Math.min(...dice);
  }
}
*/
