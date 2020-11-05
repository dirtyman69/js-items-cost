process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    let line1 =lines[0].split(" ");
    let N = Number(line1[0]);
    let c_1 = Number(line1[1]);
    let c_2 = Number(line1[2]);
    
    let c1 = 0;
    let sum = 0;
    for(let i = 1; i <= N; i++){
        if(i == N){
            sum += Number(lines[i]) * c1;
            console.log(sum);
        }else if(lines[i] <= c_1){
            c1++;
            sum -= Number(lines[i]);
        }else if(lines[i] >= c_2){
            sum += lines[i] * c1;
            c1 = 0;
        }
        
    }
    
  
});
