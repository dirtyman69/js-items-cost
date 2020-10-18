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

    let array_key = lines1.map(e => parseInt(e));
    // 残回数を保持
    

    // console.log("a".codePointAt(0));→97
    // console.log("b".codePointAt(0));98
    let koawareru = lines[1];

    for (var a = 0; a < koawareru.length; a++){
   
        let posi = koawareru[a].codePointAt(0) - 97;

        
        if (array_key[posi] > 0){
            // console.log(koawareru[a]);
            process.stdout.write(koawareru[a]);
            array_key[posi] = array_key[posi] - 1;
        }
      }
    });
    
//アルファベットがあり、入力回数できる回数が定められている。
//abbbbaarrrrrdddddd
//→abbrrrみたいな出力結果
