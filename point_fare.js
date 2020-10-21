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
    const lines1 = lines[0].split(" ");
    var charge = Number(lines1[0]);

    const ride = String(lines1[1]);

       
    const Length = Number(lines.length-1);

    
    var pt = 0;
    
    for(var i = 0; i < Length; i++){
        var fare = Number(lines[i+1]);

        if(pt >= fare){
            pt -= fare;
        }else if(pt< fare){
            charge -= fare;
            pt += fare * 0.1;
        }
        console.log(charge+" "+pt);
    }
});
