# https://school.programmers.co.kr/learn/courses/30/lessons/181875

def solution(strArr):
    for i in range(len(strArr)):
        if i%2 == 1:
            strArr[i] = strArr[i].upper()
        else:
            strArr[i] = strArr[i].lower()
    
    return strArr

# 추가 공부사항
# 1. 3항 연산자(조건식)
#   <참일 때 값> if <조건> else <거짓일 때 값>
#   strArr[i] = strArr[i].upper() if i % 2 == 1 else strArr[i].lower()
# 2. 리스트 컴프리헨션 + enumerate 사용
#   return [s.upper() if i % 2 == 1 else s.lower() for i, s in enumerate(strArr)]   