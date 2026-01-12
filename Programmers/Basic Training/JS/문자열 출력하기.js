// https://school.programmers.co.kr/learn/courses/30/lessons/181952

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
    console.log(str)
});

/*
추가 공부사항
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', console.log); // 해당 부분으로 바로 출력도 가능
*/