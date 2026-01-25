# https://school.programmers.co.kr/learn/courses/30/lessons/181911

def solution(my_strings, parts):
    answer = ''
    i=0
    for word in my_strings:
        answer += word[parts[i][0]:parts[i][1]+1]
        i+=1
    
    return answer

# 추가 공부사항
# answer 부분을 []로 만들어서 append하면 좋다
# (string 더하기는 지속적으로 새로운 string을 만드는 것이라 비효율적임)
# for word in my_strings: 부분도 
# for i, (s, e) in enumerate(parts): 로 바꿀 수 있다.
# 위 방법은 parts의 길이와 my_strings의 길이가 같을 때만 사용 가능