function solution(hp) {
    var answer = 0;
    let 장군개미 = 0;
        장군개미 = parseInt(hp / 5);
        장군개미 += parseInt((hp % 5)/3);
        장군개미 += parseInt(((hp % 5)%3)/1);
        
    return 장군개미;
}