function solution(a, b) {
    var answer = 0;
    let A = a.toString() + b.toString();
    let B = b.toString() + a.toString();
    if(Number(A) >= Number(B)) return Number(A);
    return Number(B);
}