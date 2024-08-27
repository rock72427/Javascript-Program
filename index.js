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
