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
    var n = [];
    var line = lines[0].split(" ");
    for(i = 0; i < line.length; i++){
        n.push(Number(line[i]));
    }
    n.sort(
        function(a,b){
            return (a < b ? -1 : 1);
        }
    );
  console.log(n[1]);
});
