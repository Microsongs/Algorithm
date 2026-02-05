# https://school.programmers.co.kr/learn/courses/30/lessons/181894

def solution(arr):
    front = arr.index(2) if 2 in arr else -1
    rear = len(arr) - 1 - arr[::-1].index(2) if 2 in arr else -1
    return arr[front:rear+1] if front != -1 else [-1]

# 추가 공부사항
"""
if 2 not in arr:
    return [-1]
return arr[arr.index(2): len(arr) - arr[::-1].index(2)]
"""
# ::-1로 뒤집어서 index의 위치를 찾을 수 있음   