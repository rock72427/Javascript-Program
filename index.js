let res = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 5; j > i; j--) {
    res += "  ";
  }
  for (let j = 5; j >= 6 - i; j--) {
    res += j + " ";
  }
  res += "\n";
}
console.log(res);
