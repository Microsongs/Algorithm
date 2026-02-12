# https://school.programmers.co.kr/learn/courses/30/lessons/181880

def solution(num_list):
    idx = 0
    for i in range(len(num_list)):
        while num_list[i] > 1:
            num_list[i] //= 2
            idx+=1
            
    return idx

# 추가 공부사항
# py의 몫 구하는 법 -> // 연산자
# // int()로 감싸도 정수연산이 나옴 -> 근데 //가 더 명확함 + 음수 연산 시 차이 있음