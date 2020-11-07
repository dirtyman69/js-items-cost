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
    const N = Number(lines[0]);
    //やること、絶対値でlines[0→1]の合計を出すこと
    let sum = 0
    var now_floor = 1
    
    for(i=0; i < N; i++) {
        sum += Math.abs(now_floor - lines[i+1]);
        var now_floor = lines[i+1];
        
    }
    console.log(sum);
});
