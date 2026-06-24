function solution(numbers) {
    numbers.sort((a, b) => a - b);
    let option1 = numbers[0] * numbers[1];
    let option2 = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    return Math.max(option1, option2);
}