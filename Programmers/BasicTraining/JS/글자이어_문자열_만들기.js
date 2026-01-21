// https://school.programmers.co.kr/learn/courses/30/lessons/181915

function solution(my_string, index_list) {
  var answer = "";
  for (let i = 0; i < index_list.length; i++) {
    answer += my_string[index_list[i]];
  }
  return answer;
}

// 추가 공부사항
/*
return index_list.map(i => my_string[i]).join('');
// map을 사용하여 index_list의 각 인덱스에 해당하는 my_string의 문자를 추출한 후, join('')을 사용하여 문자열로 결합
*/
