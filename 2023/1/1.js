import { readFileSync } from "fs";
const input = readFileSync("input.txt").toString().split("\n");
let result = 0;
let array = [];
input.forEach(e => {
  let g = [];
  for (let i = 0; i < e.length; i++) if (/[0-9]/.test(e[i])) g.push(e[i]);
  array.push(Number(g[0] + (g.length == 1 ? g[0] : g[g.length - 1])));
});
array.forEach(i => (result += i));
console.log(result);
