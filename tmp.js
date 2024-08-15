// write a program to print automorphic numbers in a given range
function main() {
  for (let i = 1; i <= 50; i++) {
    if (automorphic(i)) {
      console.log(i);
    }
  }
}
function automorphic(num) {
  let tmp = num;
  let count = 0;
  while (num) {
    num = Math.trunc(num / 10);
    count++;
  }

  num = tmp;
  let mul = num * num;

  let temp = mul % Math.pow(10, count);
  return temp == tmp;
}
main();
