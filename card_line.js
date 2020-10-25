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
    lines1 = lines[0].split(" ");
    
    lines1.sort(
  function(a,b){
    return (a < b ? 1 : -1);
  }
);

  //  const lines2 = Number(lines1) ;
    lines1[0] = Number(lines1[0] * 10);
    lines1[1] = Number(lines1[1] * 10);
    lines1[2] = Number(lines1[2]);
    lines1[3] = Number(lines1[3]);
    
    const reducer = (sum,currentValue) => sum + currentValue;
    const sum1 = lines1.reduce(reducer);

    
  console.log(sum1);
});

//入力値　9 3 8 2
//これを93 + 82の175になるよう最大値で出力する方法
