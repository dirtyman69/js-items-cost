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
    var N = Number(lines[0]);
     for(let i = 1; i < N+1; i++){
          const one = Number(lines[i].charAt(0));
          const two = Number(lines[i].charAt(1));
          const three = Number(lines[i].charAt(2));
          const four = Number(lines[i].charAt(3));
         
          if(one == two && two == three && three == four && four == one){
            console.log("Four Card");
          }else if(one == two && two == three || two == three && three == four || three == four && four == one || one == three && three == four){
              console.log("Three Card")
          }else if(one == two && three == four || one == three && two == four || one == four && two == three){
              console.log("Two Pair")
          }else if(one == two || one == three || one == four || two == three || two == four || three == four){
              console.log("One Pair")
          }else{
              console.log("No Pair")
          }
     }
//   console.log(lines[1].charAt(1));
});
