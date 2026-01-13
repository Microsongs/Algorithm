// https://school.programmers.co.kr/learn/courses/30/lessons/181945

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
    /*
    for(let data of str)
        console.log(data)
    */
   [...str].forEach(i => console.log(i))
});

// 추가 공부사항
// Spread 연산자 + forEach로도 추력이 가능하다.
// [...str].forEach(i => console.log(i))