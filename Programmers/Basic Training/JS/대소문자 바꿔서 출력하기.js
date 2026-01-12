// https://school.programmers.co.kr/learn/courses/30/lessons/181949

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let words = str.split("")
    let result = ""
        for(let i=0; i<words.length; i++)
            result += 
                words[i] === words[i].toUpperCase() ?
                words[i].toLowerCase() :
                words[i].toUpperCase()
    console.log(result)
});

// 추가 공부사항
// toLowerCase() -> 소문자 변환 | toUpperCase() -> 대문자 변환
// charAt() -> 문자열에서 특정 인덱스의 문자 반환