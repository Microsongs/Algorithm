// https://school.programmers.co.kr/learn/courses/30/lessons/181947

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(`${input[0]} + ${input[1]} = ${Number(input[0]) + Number(input[1])}`)
});

// 추가 공부사항
// 아래 방법은 배열의 구조분해할당으로 각 요소에 Map메서드를 통해 숫자로 변환하는 방법
// JS를 사용하는 만큼 구조분해할당, map메서드 활용법을 익혀두는 것이 필요
/*
let a, b;

rl.on('line', function (line) {
    [a, b] = line.split(' ').map(Number);
}).on('close', function () {
    console.log(`${a} + ${b} = ${a+b}`)
});
*/