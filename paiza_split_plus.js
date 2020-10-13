process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var input_string = "";
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  input_string = line;
});
reader.on('close', () => {
  const lines = input_string.split("\n");
  const line = lines[0].split(" ");
  console.log(Number(line[0])+Number(line[1]));
});
