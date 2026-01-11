// https://school.programmers.co.kr/learn/courses/30/lessons/181940?language=java
class Solution {
    public String solution(String my_string, int k) {
        String answer = "";
        for(int i=0; i<k; i++)
            answer += my_string;
        return answer;
    }
}

// 추가 공부사항
// JS와 동일하게 repeat 함수 사용 가능
// return my_string.repeat(k);