function solution(num_list) {
    var answer = [];
    num_list = num_list.sort((a,b) => a - b);
    for(let i = num_list.length-(num_list.length - 5); i < num_list.length; i++){
        answer.push(num_list[i]);
    }
    return answer;
}