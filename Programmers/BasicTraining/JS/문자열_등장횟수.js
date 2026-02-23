// https://school.programmers.co.kr/learn/courses/30/lessons/181871

function solution(myString, pat) {
    let count = 0;
    let pos = 0;
    // indexOf로 pat 찾기, 못찾으면 -1 반환하므로 while문으로 반복하여 count 증가
    while((pos = myString.indexOf(pat, pos)) !== -1){
        count++;
        pos++;
    }
    return count;
}

// 추가 공부사항
// 정규식 사용하여 간결하게 가능
// return (myString.match(new RegExp(pat, 'g')) || []).length;
// 정규식으로 pat 찾기, 못찾으면 null이므로 빈 배열로 처리하여 length 반환