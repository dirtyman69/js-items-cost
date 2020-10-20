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
//   console.log(lines[0]);
  line1 = lines[0].split(" ");
  student = Number(line1[0]);
  goukaku_score = Number(line1[1]);
  
  for (var i = 0; i < student; i++){
      var line = lines[i + 1].split(" ");
      var score = Number(line[0]);
      var absence = Number(line[1]);
      var judge = score - absence * 5
      
      if(judge >= goukaku_score || goukaku_score === 0){
          console.log(i + 1)
      }
  }
});
