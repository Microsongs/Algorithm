# https://school.programmers.co.kr/learn/courses/30/lessons/181893

def solution(arr, query):
    for i in range(len(query)):
        if i % 2 == 0:
            arr = arr[:query[i]+1]
        elif i % 2 == 1:
            arr = arr[query[i]:]
    return arr

# 추가 공부사항
# 문제 잘읽기 -> query[i]의 index가 아니라 i번째 요소임