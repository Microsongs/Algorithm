// https://school.programmers.co.kr/learn/courses/30/lessons/181942

function solution(str1, str2) {
    var answer = '';
    for(let i=0; i<str1.length; i++)
        answer += str1[i] + str2[i];
    return answer;
}

// 추가 공부사항
// 1. 배열의 map 메서드 활용 -> str1의 split된 각 문자(v)와 인덱스 (i)를 이용
// str2의 i번째 문자와 더해준 후 join으로 merge 
// return str1.split('').map((v, i) => v + str2[i]).join('');

// 2. 배열의 forEach 메서드 활용
// 위와 비슷하게 str1의 split된 각 문자(v)와 인덱스(i)를 이용
// str1.split('').forEach((v, i) => { answer += v + str2[i]; });