function solution(num_list) {
    var answer = [];
    let cnt = 0;
    let cnt2 = 0;
    for(x of num_list){
        if(x%2===0){
            cnt++;
        }else {
            cnt2++;
        }
    }
    answer.push(cnt);
    answer.push(cnt2);
    return answer;
}