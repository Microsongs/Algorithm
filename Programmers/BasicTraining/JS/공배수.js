// https://school.programmers.co.kr/learn/courses/30/lessons/181936
// 추가 공부사항
// 논리 부정 연산(!) 사용하여 간결하게 가능
// return !(number % n || number % m) ? 1 : 0; or연산+부정으로 체크

function solution(number, n, m) {
    return number % n == 0 && number % m == 0 ? 1 : 0;
}