# https://school.programmers.co.kr/learn/courses/30/lessons/181895

def solution(arr, intervals):
    first, second = intervals
    answer = []
    answer += arr[first[0] : first[1]+1]
    answer += arr[second[0] : second[1]+1]
    return answer

# 추가 공부사항
# 슬라이싱 활용
"""
a1, b1 = intervals[0]
a2, b2 = intervals[1]
return arr[a1 : b1 + 1] + arr[a2 : b2 + 1]
"""