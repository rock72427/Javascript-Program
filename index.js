// automorphic number
let num = 25;
let tmp = num;
let count = 0;
let sum = 0;
let rem;

while (num) {
  num = Math.trunc(num / 10);
  count++;
}

num = tmp;
let mul = num * num;

let temp = mul % Math.pow(10, count);

if (temp === tmp) {
  console.log(`${tmp} is an automorphic number`);
} else {
  console.log(`${tmp} is not an automorphic number`);
}
