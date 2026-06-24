function solution(x) {
    let hashard = x.toString().split('');
    let sum = 0;
    for(s of hashard){
        sum += Number(s);
    }
    return x%sum===0;
}