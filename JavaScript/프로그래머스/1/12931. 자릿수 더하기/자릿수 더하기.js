function solution(n){
    var answer = 0;
    n = n.toString().split('');
    for(x of n){
        answer += Number(x);
    }
    return answer;
}