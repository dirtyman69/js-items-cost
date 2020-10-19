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
    const name1 = lines[0];
    const name2 = lines[1];
    const name3 = lines[2];
    
    const medal1 = String("Gold" + " " + name1);
    const medal2 = String("Silver" + " " + name2);
    const medal3 = String("Bronze" + " " + name3);
    
  console.log(medal1);
  console.log(medal2);
  console.log(medal3);
});

// const name = lines[0];

// for(let i = 0; i < name; i++){
//  let medal = name[i] + 
// }

//forで回せるが、gold,silverをそれぞれに対応させる方法がわからない
