// const a = {a: 'a'}とconst b = {b: 'b'} をマージしたc を出力してください e.g{a:'a',b:'b'}

const a = {a: 'a'};
const b = {b: 'b'};
const c = Object.assign(a, b);
c //{a: 'a', b: 'b'}

console.log(c);
