function solution(arr, k) {
    var answer = [];
    for(x of arr){
        if(k%2===1){
            answer.push(x*k);
        }
        else answer.push(x+k);
    }
    return answer;
}