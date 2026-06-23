function solution(arr, delete_list) {
    var answer = [];
    for(x of arr){
        if(delete_list.includes(x));
        else answer.push(x);
    }
    return answer;
}