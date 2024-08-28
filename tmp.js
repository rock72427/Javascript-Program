let k = 3;
for (let i = 8; i >= 3; i--) {
  let output = "";
  let m = 6;
  for (let z = 0; z < m; z++) {
    if (i > 5) {
      output += `${i} `;
      break;
    }
  }
  for (let j = i; j >= k; j--) {
    if (j == 8) {
      j = 6;
      k = 1;
    } else if (j == 7) {
      j = 6;
      k = 2;
    } else if (j == 6) {
      j = 6;
      k = 3;
    } else {
      output += `${j} `;
    }
  }

  console.log(output);
}
// 8 5 4 3 2 1
// 7 5 4 3 2
// 6 5 4 3
// 5 4 3
// 4 3
// 3
// "aek" "bcd"
// Write a program to print first non repeating character in a given string
let string = "aabbcddef";
let arr = [...string];
let result = "";
let min = Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == " ") continue;
  let count = 1;
  if (arr[i] == arr[i + 1]) {
    count++;
    arr[i + 1] = " ";
  }
  if (count < min) {
    min = count;
    result = arr[i];
  }
}

console.log(result + " " + min);
