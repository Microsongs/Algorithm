# https://school.programmers.co.kr/learn/courses/30/lessons/181881

def solution(arr):
    tmp = arr[:]
    idx = 0
    while True:
        for i in range(len(arr)):
            if arr[i] >= 50 and arr[i]%2 == 0:
                arr[i] /= 2
            elif arr[i] < 50 and arr[i]%2 == 1:
                arr[i] = (arr[i] * 2) + 1
        if(tmp == arr):
            return idx
        tmp = arr[:]
        idx += 1