function solution(numbers) {
    var answer = 0;
    numbers = numbers.sort();
    for(let i = 0; i < 10; i++){
        if(numbers.includes(i)) continue;
        answer += i;
    }
    return answer;
}