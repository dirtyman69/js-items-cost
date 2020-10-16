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
    const lines_new = lines[0].split(" ");
    const N = lines_new[0];
    const M = lines_new[1];
    
    if(N % 2 === 0 && M % 2 === 1 || N % 2 === 1 && M % 2 ===0){
        console.log('YES');
    }else {
        console.log('NO');
    }
  
});
