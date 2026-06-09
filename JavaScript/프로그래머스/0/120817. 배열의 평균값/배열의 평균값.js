function solution(numbers) {
    var answer = 0;
    for(x of numbers){
        answer += x;
    }
    return answer/numbers.length;
}