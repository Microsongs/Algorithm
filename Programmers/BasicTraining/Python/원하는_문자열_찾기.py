# https://school.programmers.co.kr/learn/courses/30/lessons/181878

def solution(myString, pat):
    if pat.lower() in myString.lower():
        return 1
    else:
        return 0

# 추가 공부사항
# 반환값이 1 or 0이므로 int(pat.lower() in myString.lower())로 간단히 표현 가능