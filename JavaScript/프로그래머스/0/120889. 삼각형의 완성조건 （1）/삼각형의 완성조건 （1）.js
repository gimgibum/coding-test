function solution(sides) {
    let sum = sides[0] + sides[1] + sides[2];;
    if(sum - Math.max(...sides) > Math.max(...sides)) return 1;
    else return 2;
}