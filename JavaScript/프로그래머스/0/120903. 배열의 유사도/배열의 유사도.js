function solution(s1, s2) {
    var answer = 0;
    for(x of s1){
        if(s2.includes(x)){
            answer++;
        }
    }
    return answer;
}