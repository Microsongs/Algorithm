// https://school.programmers.co.kr/learn/courses/30/lessons/181905

function solution(my_string, s, e) {
  return (
    my_string.split("").slice(0, s).join("") +
    my_string
      .split("")
      .slice(s, e + 1)
      .reverse()
      .join("") +
    my_string
      .split("")
      .slice(e + 1)
      .join("")
  );
}

// 추가 공부사항
// reverse 제외하고 split 사용하지 않아도 가능
