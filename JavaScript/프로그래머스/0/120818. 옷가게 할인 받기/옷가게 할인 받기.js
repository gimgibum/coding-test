function solution(price) {
    var answer = 0;
    price >= 500000 ? answer = price * 0.80 : price >= 300000 ? answer = price * 0.90 : price >= 100000 ? answer = price * 0.95 : answer = price;
    return parseInt(answer);
}