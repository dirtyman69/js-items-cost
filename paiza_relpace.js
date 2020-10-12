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
    var str = lines[0];
    var obj = {
  'A': '4',
  'E': '3',
  'G': '6',
  'I': '1',
  'O': '0',
  'S': '5',
  'Z': '2'
    }
var result = Array.from(str).map(function(element) {
  return obj[ element ] || element
}).join('')
console.log(result);
});

/*
arrayの使い方
https://phpjavascriptroom.com/?t=js&p=array

map() メソッドは、与えられた関数を配列のすべての要素に対して呼び出し、その結果からなる新しい配列を生成します。
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

join() メソッドは、配列 (または配列風オブジェクト) の全要素を順に連結した文字列を新たに作成して返します。
区切り文字はコンマ、または指定された文字列です。
配列にアイテムが一つしかない場合は、区切り文字を使用せずにアイテムが返されます。

https://techacademy.jp/magazine/15333



*/
