// https://school.programmers.co.kr/learn/courses/30/lessons/181944
// js도 ${ } 문법 지원함.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    console.log(parseInt(n) % 2 == 1 ? `${n} is odd` : `${n} is even`)
});