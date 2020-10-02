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
  var N = lines[0];
  for(var i = 0; i < N; i++) {
    var year = lines[i+1];
    
        if((year % 4 === 0 && year % 100 !== 0)  || year % 400 === 0) {
        console.log(year + ' is a leap year');
    }else{
    console.log(year + ' is not a leap year');
}
  };


});