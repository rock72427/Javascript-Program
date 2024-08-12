// check the given number is palindrom or not
let num = 12345;
let tmp = num;
let rev = 0;
while (num) {
  let rem = num % 10;
  rev = rev * 10 + rem;
  num = Math.trunc(num / 10);
}
if (tmp == rev) {
  console.log("The number is a palindrome");
} else {
  console.log("The number is not a palindrome");
}
