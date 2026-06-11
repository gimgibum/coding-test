function solution(n) {
    var answer = 0;
    n = n.toString();
    for(x of n){
        answer += parseInt(x);
    }
    return answer;
}