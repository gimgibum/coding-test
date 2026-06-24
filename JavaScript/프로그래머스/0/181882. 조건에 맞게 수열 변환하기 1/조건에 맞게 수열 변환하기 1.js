function solution(arr) {
    var answer = [];
    for(x of arr){
        if(x%2===0 && x >= 50)answer.push(x/2);
        else if(x%2===1 && x <= 50) answer.push(x*2);
        else answer.push(x);
    }
    return answer;
}