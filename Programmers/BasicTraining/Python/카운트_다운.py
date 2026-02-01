# https://school.programmers.co.kr/learn/courses/30/lessons/181899

def solution(start_num, end_num):
    answer = []
    for i in range(start_num, end_num-1, -1):
        answer.append(i)
    return answer;

# 추가 공부사항
# return list(range(start_num, end_num-1, -1)) 로도 가능
# list로 반환하며 range를 사용하여 숫자 범위를 표현