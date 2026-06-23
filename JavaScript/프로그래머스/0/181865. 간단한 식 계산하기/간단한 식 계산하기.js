function solution(binomial) {
    binomial = binomial.split(' ');
    [num1 , op , num2] = binomial;
    var answer = 0;
    switch(op){
        case '+' : answer = Number(num1) + Number(num2); break;
        case '-' : answer = Number(num1) - Number(num2); break;
        case '*' : answer = Number(num1) * Number(num2); break;
    }
    return answer;
}