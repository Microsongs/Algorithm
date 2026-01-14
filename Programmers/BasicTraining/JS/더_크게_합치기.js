// https://school.programmers.co.kr/learn/courses/30/lessons/181939

function solution(a, b) {
    var answer = 0;
    let resultA = Number(String(a) + String(b))
    let resultB = Number(String(b) + String(a))
    return answer = resultA > resultB ? resultA : resultB;
}

// 추가 공부사항
// Math.max() 활용해서 더 간단히 표현 가능
// return Math.max(Number(`{a}${b}`), Number(`${b}${a}`));