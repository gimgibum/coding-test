function solution(numbers, direction) {
    var answer = [];
    let numleng = numbers.length;
    if(direction === "right"){
        answer.push(numbers.pop());
    }else answer.push(numbers.shift());
    for(let i = 0; i < numbers.length; i++){
        if(direction === "right"){
            answer.push(numbers[i]);
        }
    }
    for(let i = 0; i < numleng-1; i++){
        if(direction === 'left') answer.unshift(numbers.pop());
    }
    return answer;
}