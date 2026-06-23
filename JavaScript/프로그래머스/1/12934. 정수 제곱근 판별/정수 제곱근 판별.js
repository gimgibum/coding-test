function solution(n) {
    var answer = 0;
    for(let i = 0; i <= n; i++){
        if(n === i**2){
            return answer = parseInt((i+1)**2); 
        }
    }
    return -1;
}