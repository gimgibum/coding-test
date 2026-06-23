function solution(my_string, alp) {
    var answer = '';
    for(x of my_string){
        x === alp ? answer += x.toUpperCase() : answer += x; 
    }
    return answer;
}