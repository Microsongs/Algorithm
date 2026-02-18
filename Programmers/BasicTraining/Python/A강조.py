# https://school.programmers.co.kr/learn/courses/30/lessons/181874

def solution(myString):
    return ''.join(s.lower() if s != 'a' and s != 'A' else s.upper() for i, s in enumerate(myString));

# 추가 공부사항
# 굳이 위 방법 대신 replace 사용해도 가능
# return myString.lower().replace('a', 'A')