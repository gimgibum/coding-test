function solution(numbers) {
    // const arr = [...new Set(numbers)]; 
//     arr.sort((a,b) => b-a);
    
//     let num1 = arr[0];
//     let num2 = arr[1];
    
    const arr = numbers.sort((a,b) => b-a);
    
    let num1 = arr[0];
    let num2 = arr[1];
    
    
    return num1 * num2;
}