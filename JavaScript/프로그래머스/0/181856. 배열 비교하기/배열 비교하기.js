function solution(arr1, arr2) {
    var answer = 0;
    let sum1 = 0;
    let sum2 = 0;
    for(x of arr1){
        sum1 += x;
    }
    for(x of arr2){
        sum2 += x;
    }
        if(arr1.length !== arr2.length){
            if(arr1.length > arr2.length) answer = 1; 
            else if(arr1.length < arr2.length) answer = -1;
            else answer = 0;
        }
        if(arr1.length === arr2.length){
            if(sum1 > sum2) answer = 1;
            else if(sum1 < sum2) answer = -1;
            else answer = 0;
        }
    return answer;
}