// https://school.programmers.co.kr/learn/courses/30/lessons/181946

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str1 = input[0];
    str2 = input[1];
    console.log(`${str1}${str2}`)
    rl.close();
});

// 추가 공부사항
// join 메서드를 사용하면 문자열 갯수 상관없이 간결하게 처리 가능
// console.log(input.join(''));