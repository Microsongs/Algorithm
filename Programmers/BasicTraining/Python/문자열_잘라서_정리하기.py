# https://school.programmers.co.kr/learn/courses/30/lessons/181866

def solution(myString):
    return sorted(i for i in myString.split("x") if i)

# 추가 공부사항
"""
split() -> 문자열을 특정 구분자로 나누어 리스트 반환
sorted() -> 정렬된 리스트 반환
i for i in 문법 -> 리스트 컴프리헨션, 조건에 맞는 요소들을 새로운 리스트로 생성
"""
