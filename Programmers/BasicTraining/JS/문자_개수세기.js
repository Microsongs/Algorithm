// https://school.programmers.co.kr/learn/courses/30/lessons/181902

function solution(my_string) {
  let result = new Array(52).fill(0);
  for (let idx of my_string) {
    let temp = idx.charCodeAt(0);
    if (temp <= "Z".charCodeAt(0)) result[temp - "A".charCodeAt(0)]++;
    else
      result[
        temp - "A".charCodeAt(0) - ("a".charCodeAt(0) - "Z".charCodeAt(0) - 1)
      ]++;
  }
  return result;
}

// 추가 공부사항
// 아예 알파벳을 나열해서 각 indexOf(char)로 접근 및 카운트 가능
/*
let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
let a = new Array(52).fill(0);
for (let char of my_string) {
    let index = alphabet.indexOf(char);
    result[index]++;
}

*/
