function solution(box, n) {
    var answer = 0;
    let ga = 0;
    let se = 0;
    let nop = 0;
    for(let i = 0; i < box.length; i++){
        if(i===0) ga = parseInt(box[i]/n);
        else if(i===1) se = parseInt(box[i]/n);
        else if(i===2) nop = parseInt(box[i]/n);
    }
    return ga * se * nop;
}