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
 let line1 = lines[0].split(' ');
    let height = line1[0];
    let width = line1[1];
    let x_width = line1[2];
    var mozi = "";
    var array = [];
    
    for(let i = 0; i < Number(height); i++){
        mozi += lines[i+1];
    }
    // console.log(mozi);文字列が全て入る
    for(let i = 0; mozi.length > 0; i++){
        //文字列を切り出し出力
        var a = mozi.slice(0,x_width);
        console.log(a);
        mozi = mozi.slice(x_width,mozi.length);
        // console.log(mozi);
        // array.append(a);
    }
    // console.log(array);
});
