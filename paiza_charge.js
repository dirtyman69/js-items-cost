process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！
// 1万円切ってたら1000円チャージ
// 1万円以上あったらそのまま出力

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
  var X = parseInt(lines[0]);
  
  if(X < 10000) {
      console.log(X + 10000);
  }else{
      console.log(X);
  }
  
});