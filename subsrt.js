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
    var n = lines[0];
    var write = "Hello ";
    for(i = 1; i <= n; i++){
        write += String(lines[i])+","
    }
    // '千葉東京神奈川山梨千葉東京山梨東京千葉'.replace(/(.*)東京/,"$1とうきょう")
    
    var w　= String(write);
    var answer = w.substr(0,w.length-1)
    var a = answer + "."
  console.log(a);
});
