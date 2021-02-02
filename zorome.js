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
    var line = lines[0].split(" ");
    var month = line[0];
    var day = line[1];
    var n = [];
    
    while(month >= 1){
        n.push(Math.floor(month % 10))
        month = month / 10
    }
    
    while(day >= 1) {
        n.push(Math.floor(day % 10))
        day = day / 10
    }
    
    var num = n.length
    if(n.every(v => v === n[0])){
        console.log("Yes");
    }else{
        console.log("No");
    }
    
  
});
