# https://school.programmers.co.kr/learn/courses/30/lessons/181884

def solution(numbers, n):
    result = 0
    for idx in numbers:
        result += idx
        if n < result:
            return result
        
