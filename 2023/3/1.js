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
      let x = j - s + 1;
      let v = false;
      for (let k = i == 0 ? 1 : 0; k < (i == input.length - 1 ? 2 : 3); k++)
        for (let l = 0; l < j - x + 3; l++)
          if (
            input[i + k - 1].split("")[x + l - 1] != "." &&
            isNaN(input[i + k - 1].split("")[x + l - 1]) &&
            input[i + k - 1].split("")[x + l - 1] != undefined
          )
            v = true;
      let n = "";
      for (let i = 0; i < j - x + 1; i++) n += input[i].split("")[x + i];
      if (v) array.push(n);
    }
  }
}
console.log(array);
array.forEach(x => (result += x));
console.log(result);
