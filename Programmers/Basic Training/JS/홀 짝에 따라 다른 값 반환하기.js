// https://school.programmers.co.kr/learn/courses/30/lessons/181935
// 추가 공부사항
// 수학문제 -> 홀수는 (n+1)/2 제곱의 합, 짝수는 n/2(n+1)(n+1) 제곱의 합 공식 활용 가능

function solution(n) {
    let result = 0;
    for(let i=n%2; i<=n; i+=2){
        result += Math.pow(i, n%2==1 ? 1 : 2)
    }
    return result;
}