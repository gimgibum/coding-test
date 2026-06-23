function solution(a, b) {
    var answer = 0;
    let up = 0;
    let down = 0;
    if(a > b){
        up = a;
        down = b;
        b = up;
        a = down;
    }
    for(let i = a; i <= b; i++){
        answer += i;
        if(a === b){
            return a;
        }
    }
    return answer;
}