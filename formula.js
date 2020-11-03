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
    let line1 = lines[0].split(" ");
    let a = String(line1[0]);
    let op = line1[1];
    let b = String(line1[2]);
    let iqual = line1[3];
    let c = String(line1[4]);
    
    if(a.includes('x')){
        if(op == "+"){
            console.log(Number(c) - Number(b));
        }else{
            console.log(Number(c) + Number(b));
        }
        
    }else if(b.includes('x')){
        if(op == "+"){
            console.log(Number(a)  + Number(c));
        }else{
            console.log(Number(a)  - Number(c));
        }
       
    }else if(c.includes('x')){
        if(op == "+"){
            console.log(Number(a) + Number(b));
        }else{
            console.log(Number(a) - Number(b));
        }
        
    }else{}
});
