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
    const str1 = lines[0];
    const str2 = lines[1];
    if(str1 === str2) {
        console.log('OK');
    }else{
        console.log('NG');
    }
});

//文字列を一致させる
