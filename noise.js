process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    // 配列lines[0]の中身を見ると"20 10 10"という文字になっていてこのままでは扱いづらいので
    // console.log("linesの中身:",lines[0]);
    // 一行目の"20 10 10"の文字列を配列に変換する処理を行っている

    const line1 = lines[0].split(" ");
    // 実行結果は[ '20', '10', '10' ]になるので一行目の文字列が配列になっていることを確認できると思います。
    // console.log("配列化した結果:",line1);

    const a = Number(line1[0]);
    const b = Number(line1[1]);
    const R = Number(line1[2]);
    
    const N = Number(lines[1]);
    // 文字はstring型という変数の中に入ってしまいます。そのままではfor文の中で変数として使用したりはできないのでint型の変数にする必要がありますその処理を行います。

    // ここで使う数字などの準備が終わったのでメインとなる判定する処理を書いていきます。
    for(let i= 0; i < N; i++){
        let line_tmp = lines[i+2].split(" ")

        let x_i = Number(line_tmp[0]);
        let y_i = Number(line_tmp[1]);
        
        let noise = ((x_i - a)*(x_i - a)) + ((y_i - b)*(y_i - b)) >= R * R;
        
        if(noise) {
            console.log("silent");
        }else{
            console.log("noisy");
        }
    }
});

// c010の問題
