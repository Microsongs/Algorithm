// https://school.programmers.co.kr/learn/courses/30/lessons/181948

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('close', function () {
    process.stdout.write("!@#$%^&*\(\\\'\"<>?:;")
});

// 추가 공부사항
// console.log(`!@#$%^&*(\\'"<>?:;`) // 백틱(`) 사용하여 출력 가능
// (백틱은 이스케이프 문자 없이도 특수문자 출력 가능)