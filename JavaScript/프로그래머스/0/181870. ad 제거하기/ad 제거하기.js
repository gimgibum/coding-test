function solution(strArr) {
    var answer = [];
    like = 0;
    for(x of strArr){
         x.includes("ad") ? like++ : answer.push(x);
    }
    return answer;
}