import { readFileSync } from "fs";
const input = readFileSync("input.txt").toString().split("\n");
const m = {
  red: 12,
  green: 13,
  blue: 14
};
let array = [];
let result = 0;
for (let i = 0; i < input.length; i++) {
  let p = true;
  input[i]
    .split(": ")[1]
    .split("; ")
    .forEach(j => {
      j.split(", ").forEach(k => {
        if (m[k.split(" ")[1]] < Number(k.split(" ")[0])) p = false;
      });
    });
  if (p) array.push(i + 1);
}
array.forEach(i => (result += i));
console.log(result);
