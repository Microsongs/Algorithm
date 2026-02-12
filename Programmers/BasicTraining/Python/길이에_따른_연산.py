# https://school.programmers.co.kr/learn/courses/30/lessons/181879

def solution(num_list):
    if len(num_list) > 10:
        return sum(num_list)
    else:
        result = 1
        for i in num_list:
            result *= i
        return result 

# 추가 공부사항
# import math -> prod로 모든 원소 곱 가능