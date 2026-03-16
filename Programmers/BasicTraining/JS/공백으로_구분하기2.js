function solution(my_string) {
    return my_string.trim().split(/\s+/);
}

// 추가 공부사항 -> filter 메서드 사용
/*
function solution(my_string){
    return my_string.split(' ').filter(v => v);
}
*/