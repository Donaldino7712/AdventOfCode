import { readFileSync } from "fs";
const input = readFileSync("input.txt").toString().split("\n");
let result = 0;
let array = [];
for (let i = 0; i < input.length; i++) {
  let validateArray = a => {
    let h = [];
    a.forEach(j => {
      if (j != "") h.push(j);
    });
    return h;
  };
  let findDuplicates = (a1, a2) => {
    let g = [];
    a1.forEach(j => {
      if (!g.includes(j) && a2.includes(j)) g.push(j);
    });
    a2.forEach(j => {
      if (!g.includes(j) && a1.includes(j)) g.push(j);
    });
    return g;
  };
  const e = input[i]
    .split(":")[1]
    .split("|")
    .map(j => validateArray(j.split(" ")));
  array.push(findDuplicates(...e).length == 0 ? 0 : 2 ** (findDuplicates(...e).length - 1));
}
array.forEach(x => (result += x));
console.log(result);