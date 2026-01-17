//https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
  let odd = [];
  let even = [];
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) even.push(num_list[i]);
    else odd.push(num_list[i]);
  }

  return (
    Number(even.toString().replaceAll(",", "")) +
    Number(odd.toString().replaceAll(",", ""))
  );
}

// 추가 공부사항
// let odd = "", even = "";
// for(const num of num_list){
//     if(num % 2 === 0) even += num;
//     else odd += num;
// }
// return Number(even) + Number(odd);
// 문자열로 바로 더하기 가능(굳이 배열로 바꿀 필요 없음)
