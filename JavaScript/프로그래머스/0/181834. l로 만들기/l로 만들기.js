function solution(myString) {
    var answer = '';
    let L = "l";
    for(x of myString){
        if(x.charCodeAt() < L.charCodeAt()){
            answer += L;
        }else answer += x;
    }
    return answer;
}