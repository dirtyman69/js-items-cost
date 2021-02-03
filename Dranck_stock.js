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
    var money = Number(lines[0]);
    var buy = Number(lines[1]);
    var sell = lines[2];
    
    var stock = Math.floor(money / buy);
    var selling = stock * sell
    var answer = selling - stock * buy;
  console.log(answer);
});
