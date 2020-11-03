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
    line1 = lines[0].split(" ");
    let n = line1[0];
    let m = line1[1];
    
    let two = parseInt(m.toString(2));
    let tw = two.toString(2);//101100
    
      for(let i = 0; i < n; i++){
        console.log(tw.charAt(tw.length - lines[i+1]));
      }

});
