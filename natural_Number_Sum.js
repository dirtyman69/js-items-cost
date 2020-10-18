process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

function divisor(num){
    var results = [];
    for(var i=1; i<=num; i++) {
        if( (num%i === 0) ) {
            results.push(i);
        }
    }
    return results;
}


var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const N = Number(lines[0]);
    
    for (var i = 0; i < N;i++){
        let N = Number(lines[i+1]);
        // rには約数の配列が入ります。
        let r = divisor(N);
        
        // ここでNを除いた約数の合計を求めます
        let S = 0;
        for(let j = 0; j < r.length;j++){
            S = S + Number(r[j]);
        }
        S = S - N;
        // console.log(S);
        if(S == N){
            console.log("perfect");
        }else if(Math.abs(N -S) == 1){
            console.log("nearly");
        }else{
            console.log("neither");
        }
        
    }
});
