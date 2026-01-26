# https://school.programmers.co.kr/learn/courses/30/lessons/181908

def solution(my_string, is_suffix):
    answer = []
    for i in range(len(my_string)):
        answer.append(my_string[-i-1:])
    return 1 if is_suffix in answer else 0

# 추가 공부사항
# int(my_string.endswith(is_suffix))로 가능
# endswith 메서드는 문자열이 특정 접미사로 끝나는지 확인하는 데 사용