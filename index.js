main();
function main() {
  let count = 0;
  for (let i = 2; i < 50; i++) {
    if (prime(i)) {
      if (count % 2 == 0) {
        console.log(i);
      }
      count++;
    }
  }
}
function prime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
