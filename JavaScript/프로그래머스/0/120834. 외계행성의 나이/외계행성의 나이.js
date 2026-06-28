function solution(age) {
    var answer = '';
    age = age.toString().split('');
    for(x of age){
        x === '0' ? answer += 'a' : x === '1' ? answer += 'b' : x === '2' ? answer += 'c' :  x === '3' ? answer += 'd' : x === '4' ? answer += 'e' : x === '5' ? answer += 'f' : x === '6' ? answer += 'g' : x === '7' ? answer += 'h' : x === '8' ? answer += 'i' : x === '9' ? answer += 'j' : 0;
    }
    return answer;
}