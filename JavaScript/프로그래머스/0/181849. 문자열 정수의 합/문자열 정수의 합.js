function solution(num_str) {
    var answer = 0;
    for(x of num_str){
        answer += parseInt(x);
    }
    return answer;
}