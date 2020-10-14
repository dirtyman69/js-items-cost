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
    const N = lines[0];
    for(let i = 1; i <= N; i++){
        
    if(i % 15 === 0) {
        console.log('Fizz Buzz');
    }else if(i % 5 === 0){
        console.log('Buzz');
    }else if(i % 3 === 0){
        console.log('Fizz');
    }else{
        console.log(i);
    }
    }
});

//与えられた値5とか、２０とか。
