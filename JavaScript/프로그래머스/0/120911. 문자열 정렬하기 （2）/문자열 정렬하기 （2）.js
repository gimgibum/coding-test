function solution(my_string) {
    my_string = my_string.toLowerCase().split('');
    my_string = my_string.sort((a,b) => a.localeCompare(b));
    var answer = '';
    for(x of my_string) answer += x;
    return answer;
}