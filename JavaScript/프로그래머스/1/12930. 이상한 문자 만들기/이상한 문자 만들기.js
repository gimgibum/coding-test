function solution(s) {
    s = s.split("");
    let cnt = 0;
    var answer = '';
    for(x of s){
        if(cnt%2===0){
            answer += x.toUpperCase();
            cnt++;
        }else if(cnt%2===1){
            answer += x.toLowerCase();
            cnt++;
        }
        if(x === " "){
            cnt = 0;
        }
    }
    return answer;
}