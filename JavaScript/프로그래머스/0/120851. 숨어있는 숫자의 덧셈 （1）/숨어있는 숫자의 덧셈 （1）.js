function solution(my_string) {
    var answer = 0;
    for(x of my_string){
        if(!isNaN(Number(x))){
            answer += Number(x);
        }
    }
    return answer;
}