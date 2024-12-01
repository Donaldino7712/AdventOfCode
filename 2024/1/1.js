import { readFileSync } from "fs";
const input = readFileSync("input.txt").toString().split("\n");
let result = 0;
let left = [],
  right = [];

// Convert the input into two arrays containing the numbers from the left and right list
input
  .map(d => d.split(" "))
  .forEach(d => {
    left.push(Number(d[0]));
    right.push(Number(d[3]));
  });

// Sort the arrays in descending order
left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

// Calculate the result
for (let i = 0; i < input.length; i++) result += Math.abs(left[i] - right[i]);

console.log(result);
