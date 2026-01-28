//https://school.programmers.co.kr/learn/courses/30/lessons/181900

function solution(my_string, indices) {
  var answer = "";
  return my_string
    .split("")
    .filter((_, i) => !indices.includes(i))
    .join("");
}

// 추가 공부사항
// includes는 반환값이 boolean이라 filter에서 바로 사용 가능(!로 들어있지 않은 값만 추가)
