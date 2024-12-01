import { readFileSync } from "fs";
const input = readFileSync("input.txt").toString().split("\n");
let array = [];
let result = 0;
for (let i = 0; i < input.length; i++) {
  let m = {
    red: 0,
    green: 0,
    blue: 0
  };
  input[i]
    .split(": ")[1]
    .split("; ")
    .forEach(j => {
      j.split(", ").forEach(k => {
        if (m[k.split(" ")[1]] < Number(k.split(" ")[0])) m[k.split(" ")[1]] = Number(k.split(" ")[0]);
      });
    });
  array.push(m.red * m.green * m.blue);
}
array.forEach(i => (result += i));
console.log(result);
