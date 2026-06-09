function solution(myString) {
    var answer = '';
    for(x of myString){
        if(x==='a' || x==='A'){
            answer += x.toUpperCase();
        }else answer += x.toLowerCase();
    }
    return answer;
}