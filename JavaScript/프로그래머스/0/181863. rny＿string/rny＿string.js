function solution(rny_string) {
    var answer = '';
    for(x of rny_string){
        if(x === 'm') answer+='rn';
        else answer += x;
    }
    return answer;
}