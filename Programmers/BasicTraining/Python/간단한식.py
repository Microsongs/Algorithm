# https://school.programmers.co.kr/learn/courses/30/lessons/181865

def solution(binomial):
    a, op, b = binomial.split(" ")
    a = int(a)
    b = int(b)

    if op == "+":
        return a + b
    elif op == "-":
        return a - b
    elif op == "*":
        return a * b

# 추가 공부사항
# JS의 구조분해할당처럼 여러 변수에 split 가능
