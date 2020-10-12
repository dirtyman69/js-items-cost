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
    var str = lines[0];
    var obj = {
  'A': '4',
  'E': '3',
  'G': '6',
  'I': '1',
  'O': '0',
  'S': '5',
  'Z': '2'
    }
var result = Array.from(str).map(function(element) {
  return obj[ element ] || element
}).join('')
console.log(result);
});
