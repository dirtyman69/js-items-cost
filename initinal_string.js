process.stdin.resume();
process.stdin.setEncoding('utf8');
// 自分の得意な言語で
// Let's チャレンジ！！

var input_string = "";
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  input_string = line;
});
reader.on('close', () => {
    let lines_row = input_string.split(" ");
    let str1 = lines_row[0];
    let str2 = lines_row[1];
    
    //頭文字の最初の出力
    let str_initial1 = str1.slice(0,1);
    let str_initial2 = str2.slice(0,1);
    
  console.log(str_initial1+"."+str_initial2);
});
