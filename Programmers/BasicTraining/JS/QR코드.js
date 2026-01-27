// https://school.programmers.co.kr/learn/courses/30/lessons/181903

function solution(q, r, code) {
  return [...code].filter((_, idx) => idx % q === r).join("");
}

// 기존 방법대로 구조분해할당 + filter 메서드 사용
