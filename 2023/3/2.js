import { readFileSync } from "fs";
const input = readFileSync("input.txt").toString().split("\n");
let result = 0;
let array = [];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[i].split("").length; j++) {
    const f = input[i].split("");
    if (!isNaN(f[j]) && isNaN(f[j + 1])) {
      let s = 0;
      let t = false;
      for (let k = 0; k < 3; k++) !isNaN(f[j - k]) && !t ? s++ : (t = true);
      let startingX = j - s + 1;
      let e = [i, [j - s + 1, j]];
      let v = false;
      for (let i = i == 0 ? 1 : 0; i < (i == input.length - 1 ? 2 : 3); i++)
        for (let j = 0; j < j - startingX + 3; j++)
          if (
            input[i + i - 1].split("")[startingX + j - 1] != "." &&
            isNaN(input[i + i - 1].split("")[startingX + j - 1]) &&
            input[i + i - 1].split("")[startingX + j - 1] != undefined
          )
            v = true;
      let x = "";
      for (let i = 0; i < j - startingX + 1; i++) x += input[i].split("")[startingX + i];
      if (v) array.push(Number(x));
    }
  }
}
array.forEach(x => (result += x));
console.log(result);
