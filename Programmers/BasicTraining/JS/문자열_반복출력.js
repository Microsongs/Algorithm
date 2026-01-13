// https://school.programmers.co.kr/learn/courses/30/lessons/181950

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    console.log(str.repeat(n))
});

// 추가 공부사항
// 1. 전에 배운 String.prototype.repeat() 메서드를 사용하여 문자열을 n번 반복 출력
// 2. console.log()는 자동개행(\n)을 포함, 보기 좋게 출력
// process.stdout.write()는 개행문자 포함X, 문자열 그대로 출력
// (문자열을 누적해서 마지막에 한 번 출력할 때 유용)