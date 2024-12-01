import { readFileSync } from "fs";
const input = readFileSync("input.txt").toString().split("\n");
let result = 0;
let array = [];
let n = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].split("").length; j++) {
    const f = input[i].split("");
    if (!isNaN(f[j]) && isNaN(f[j + 1])) {
      let s = 0;
      let t = false;
      for (let k = 0; k < 3; k++) !isNaN(f[j - k]) && !t ? s++ : (t = true);
      n.push([i, [j - s + 1, j]]);
    }
  }
}
n.forEach(e => {
  // console.log(e)
  let v = false;
  for (let i = e[0] == 0 ? 1 : 0; i < (e[0] == input.length - 1 ? 2 : 3); i++)
    for (let j = 0; j < e[1][1] - e[1][0] + 3; j++)
      if (
        input[e[0] + i - 1].split("")[e[1][0] + j - 1] != "." &&
        isNaN(input[e[0] + i - 1].split("")[e[1][0] + j - 1]) &&
        input[e[0] + i - 1].split("")[e[1][0] + j - 1] != undefined
      )
        v = true;
  // if (isNaN(input[e[0]].split('')[e[1][0] + 1])) console.log(e, `${input[e[0]].split('')[e[1][0]]}${input[e[0]].split('')[e[1][0] + 1]}${e[1][1] - e[1][0] == 3 ? input[e[0]].split('')[e[1][0] + 2] : ''}`)
  let x = "";
  for (let i = 0; i < e[1][1] - e[1][0] + 1; i++) {
    x += input[e[0]].split("")[e[1][0] + i];
    // console.log(e, i, x)
  }
  if (v) array.push(Number(x));
  // if (v) array.push(x)
});
console.log(array);
array.forEach(x => (result += x));
console.log(result);
