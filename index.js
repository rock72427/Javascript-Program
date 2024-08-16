function main() {
  const num = 19;
  let i = num + 1;
  let steps = 0;

  while (true) {
    steps++;
    if (isPrime(i)) {
      console.log(steps);
      break;
    }
    i++;
  }
}

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

main();
