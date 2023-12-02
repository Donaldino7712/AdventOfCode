import { input } from "./inputData.js"
const m = {
    red: 12,
    green: 13,
    blue: 14
}
let array = []
let result = 0
for (let i = 0; i < input.length; i++) {
    let h = {
        red: 0,
        green: 0,
        blue: 0
    }
    input[i].split(': ')[1].split('; ').forEach(j => {
        j.split(', ').forEach(k => {
            if (h[k.split(' ')[1]] < Number(k.split(' ')[0])) h[k.split(' ')[1]] = Number(k.split(' ')[0])
        })
    })
    array.push(h.red * h.green * h.blue)
}
array.forEach(i => result += i)
console.log(result)