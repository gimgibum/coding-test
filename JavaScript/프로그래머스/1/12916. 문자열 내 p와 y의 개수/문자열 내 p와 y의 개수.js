function solution(s){
    s = s.toLowerCase().split('');
    var answer = true
    let pcount = 0;
    let ycount = 0;
    for(x of s){
        if(x === 'p') {
            pcount++;
        }else if(x === 'y'){
            ycount++;
        }
    }
    if(pcount !== ycount) answer = false;
    return answer;
}