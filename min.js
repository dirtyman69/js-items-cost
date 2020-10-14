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
    const array = [lines[0],lines[1],lines[2],lines[3],lines[4]];
    const min_n = Math.min.apply(null, array);
  console.log(min_n);
});

//最小値を求める

/*
与えられる値
39
2
50
3
5
*/ 
