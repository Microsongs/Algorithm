# https://school.programmers.co.kr/learn/courses/30/lessons/181913

def solution(my_string, queries):
    answer = list(my_string)
    for i in queries:
        answer[i[0]:i[1]+1] = answer[i[0]:i[1]+1][::-1]
    return ''.join(answer)

# 추가 공부사항 -> for in은 여러 요소를 꺼내올 수 있다.
# for i, j in queries:
# -> answer[i:j+1] = answer[i:j+1][::-1]