import { readFileSync } from "fs";
const input = readFileSync("input.txt").toString().split("\n");
let result = 0;
let array = [];
const n = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};
const N = {
  twone: 21,
  oneight: 18,
  threeight: 38,
  fiveight: 58,
  nineight: 98,
  eightwo: 82,
  eighthree: 83,
  sevenine: 79
};
input.forEach(e => {
  let g = [];
  Object.keys(N).forEach(j => (e = e.replace(new RegExp(`${j}`, "g"), N[j])));
  Object.keys(n).forEach(j => (e = e.replace(new RegExp(`${j}`, "g"), n[j])));
  for (let i = 0; i < e.length; i++) if (/[0-9]/.test(e[i])) g.push(e[i]);
  array.push(Number(g[0] + (g.length == 1 ? g[0] : g[g.length - 1])));
});
array.forEach(i => (result += i));
console.log(result);
