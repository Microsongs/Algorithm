# https://school.programmers.co.kr/learn/courses/30/lessons/181912

def solution(intStrs, k, s, l):
    answer = []
    for i in intStrs:
        temp = int(i[s:s+l])
        if(temp > k):
            answer.append(temp)
    return answer