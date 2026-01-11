// https://school.programmers.co.kr/learn/courses/30/lessons/181938?language=javascript

function solution(a, b) {
    let betA = 0;
    let digit = 1
    
    let numA = String(a).split("")
    let numB = String(b).split("")
    let merge = numA.concat(numB).map(Number)
    
    for(let i=merge.length-1; i>=0; i--){
        betA += merge[i] * digit;
        digit *= 10;
    }
    
    return betA >= (2*a*b) ? betA : (2*a*b);
}

// 추가 공부사항
// 굳이 길게 늘어뜨리지 않고 parseInt 혹은 toString 사용하여 더 간결하게 가능
/* 
1. parseInt 사용
// parseInt -> 문자열을 정수로 변환
return Math.max(parseInt('' + a + b), 2 * a * b);

2. toString 사용
// toString() -> 숫자를 문자열로 변환한 것을 Number로 다시 숫자화
return Math.max(Number(a.toString() + b.toString()), 2*a*b);
*/