function solution(myString) {
    var answer = [];
    let leng = myString.split("x");
    let i = 0;
    for(x of leng){
        answer[i] = x.length;
        i++;
    }
    return answer;
}