// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
  let arr = [];
  for (let i = l; i <= r; i++) {
    let temp = i.toString().split("");
    let cnt = 0;
    for (let j = 0; j < temp.length; j++) {
      if (temp[j] === "0" || temp[j] === "5") cnt++;
    }
    if (cnt === temp.length) arr.push(i);
  }
  return arr.length === 0 ? [-1] : arr;
}

// 추가 공부사항
// 문제 의도는 0과 5로 이루어진 숫자 -> 1과 0으로 이루어진 이진수에 5를 곱한 것
// gen50 -> 제너레이터 함수 사용
// i.toString(2) → i를 2진수 문자열로 변환 (예: 1 → "1", 2 → "10", 3 → "11")
// Number(...) → 그 문자열을 10진수로 해석해서 숫자로 변환 (예: "10" → 10)
// * 5 → 5를 곱해서 최종 값을 생성
// yield -> 이 값을 호출자에게 반환하고 함수 실행을 일시정지
function* gen50() {
  let i = 1; // i는 1부터 시작해서 계속 증가

  while (true) {
    yield Number(Number(i).toString(2)) * 5;
    i++; // 다음 숫자로 이동
  }
}
function solution(l, r) {
  const n = gen50(); //제너레이터 객체 생성
  let a = 0;
  const arr = [];

  while (a < l) a = n.next().value;
  while (a <= r) {
    arr.push(a);
    a = n.next().value;
  }
  // 첫번째 while로 1보다 작은 값 다 건너뛴 뒤 n.next()가 다음 yield 값 반환, .value로 a에 저장
  // 두번째 while로 r보다 작거나 같은 값들 arr에 저장

  return arr.length === 0 ? [-1] : arr;
}
