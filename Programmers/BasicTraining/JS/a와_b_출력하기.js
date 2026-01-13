// https://school.programmers.co.kr/learn/challenges/training?order=acceptance_desc
// 추가 공부사항
// input.split(' ')으로 공백기준 데이터를 나눠서 사용 가능

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    console.log(`a = ${input[0]}`)
    console.log(`b = ${input[1]}`)
});