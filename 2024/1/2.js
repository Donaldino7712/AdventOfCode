import { readFileSync } from "fs";
const input = readFileSync("input.txt").toString().split("\n");
let result = 0;
let left = {},
  right = {};

// Convert the input into two objects containing the amount of times each number appears
input
  .map(d => d.split(" "))
  .forEach(d => {
    left[Number(d[0])] = left[Number(d[0])] ? left[Number(d[0])] + 1 : 1;
    right[Number(d[3])] = right[Number(d[3])] ? right[Number(d[3])] + 1 : 1;
  });

// Find the numbers which appear in both objects
const duplicates = Object.keys(left).filter(n => Object.keys(right).includes(n));

// Calculate the result
duplicates.forEach(n => (result += Number(n) * left[n] * right[n]));

console.log(result);
