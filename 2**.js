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
    var n = Number(lines[0]);
    var num = n.toString(2);
    
    if(num.slice(0,1) == 1 && Number(num.slice(1,num.length) == 0)){
        console.log("OK")
    }else{
        console.log("NG")
    }
});
