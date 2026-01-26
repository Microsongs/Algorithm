# https://school.programmers.co.kr/learn/courses/30/lessons/181909

def solution(my_string):
    answer = []
    for i in range(len(my_string)):
        answer.append(my_string[len(my_string)-i-1:len(my_string)])
    answer.sort()
    return answer

# 추가 공부사항
# append할 때 my_string[-i-1:]로도 가능
