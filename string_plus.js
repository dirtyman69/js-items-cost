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
    //todo
    //・上に文字数＋２の＋を挿入
    //・文字列の最初と最後に＋を入れる　配列にできると
        // 先頭から追加unshift()
        // 末尾から追加push
    //・下に文字数＋２の＋を挿入
        const write = lines[0];
        
        //console.log(write);
        const length = write.length; 
        
       // console.log(length);
        
        const plus = String("+");
        //console.log(plus);
        
        //上の＋
        const upper = String(plus.repeat(length+2));
        //console.log(upper);
        
        //文字列の前後に＋
        const ba = String(plus + write + plus);
        //console.log(ba);
        
        //出力
        const msg = `${upper}
${ba}
${upper}`;
        console.log(msg);
 
});
