# https://school.programmers.co.kr/learn/courses/30/lessons/181898

def solution(arr, idx):
    answer = 0
    for i in range(idx, len(arr)):
        if(arr[i] == 1):
            return i
    return -1