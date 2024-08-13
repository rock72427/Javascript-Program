// Check the given number is strong number or not
let num = 145;
let tmp = num;
let sum = 0;
while (num) {
  let rem = num % 10;
  let fact = 1;
  for (let i = 2; i <= rem; i++) {
    fact = fact * i;
  }
  sum += fact;
  num = Math.trunc(num / 10);
}
if (tmp == sum) {
  console.log(`${tmp} == ${sum}. It's a strong number`);
} else {
  console.log(`${tmp} != ${sum}. It's not a strong number`);
}
