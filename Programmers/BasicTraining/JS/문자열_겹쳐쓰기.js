// https://school.programmers.co.kr/learn/courses/30/lessons/181943

function solution(my_string, overwrite_string, s) {
    var answer = my_string.split('');
    for(let i=s; i < (s+overwrite_string.length); i++){
        answer[i] = overwrite_string[i-s];
    }
    return answer.join('');
}

// 추가 공부사항
// 1. slice로 붙여서 떼기 방법
// 0~s는 my_string에서 자르고
// s~s+overwrite_string.length는 overwrite_string으로 대체
// s+overwrite_string.length~끝까지는 my_string에서 자르기
// return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);

// 2. splice로 교체하기 방법 -> for반복문 부분을 아래와 같이 교체
// 시작 부분(s), 지울 갯수(overwrite_string.length), 넣을 값(overwrite_string) 지정
// answer.splice(s, overwrite_string.length, overwrite_string);