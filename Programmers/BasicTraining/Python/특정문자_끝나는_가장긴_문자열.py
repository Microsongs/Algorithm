# https://school.programmers.co.kr/learn/courses/30/lessons/181872

def solution(myString, pat):
    return myString[:myString.rindex(pat)+len(pat)]

# 추가 공부사항
# rfind -> 못 찾으면 -1 반환 / rindex -> 못 찾으면 ValueError 예외 발생