function solution(myString) {
    let i =  myString.split("x").sort();
    var answer = i.filter(leng => leng.trim() !== "");
    return answer;
}