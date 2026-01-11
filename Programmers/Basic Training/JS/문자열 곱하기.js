// https://school.programmers.co.kr/learn/courses/30/lessons/181940?language=javascript

function solution(my_string, k) {
    var answer = '';
    for(let i=0; i<k; i++)
        answer += my_string;
    return answer;
}

// 추가 공부사항
// 1. String.prototype.repeat() 메서드를 사용하면 반복문 대신 1줄로 줄일 수 있다.
// return my_string.repeat(k);