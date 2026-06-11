function solution(hp) {
    var answer = 0;
    let sum = 0;
        sum = parseInt(hp / 5);
        sum += parseInt((hp % 5)/3);
        sum += parseInt(((hp % 5)%3)/1);
        
    return sum;
}