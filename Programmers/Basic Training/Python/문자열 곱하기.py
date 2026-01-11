# https://school.programmers.co.kr/learn/courses/30/lessons/181940?language=python3

def solution(my_string, k):
    answer = ''
    for i in range(k):
        answer += my_string;
    return answer

"""
추가 공부사항
Python은 문자열 곱셈 지원 -> return my_string*k 가능
"""