# https://school.programmers.co.kr/learn/courses/30/lessons/181897

def solution(n, slicer, num_list):
    answer = []
    match n:
        case 1:
            return num_list[0:slicer[1]+1]
        case 2:
            return num_list[slicer[0]:]
        case 3:
            return num_list[slicer[0]:slicer[1]+1]
        case 4:
            return num_list[slicer[0]:slicer[1]+1:slicer[2]]
    return answer

# 추가 공부사항
# 슬라이싱 활용
"""
a, b, c = slicer
return [num_list[:b+1], num_list[a:], num_list[a:b+1], num_list[a:b+1:c]][n-1]
"""