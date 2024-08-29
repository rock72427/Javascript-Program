## 1. Write a program to print number from 100 to 200

```
for (let i = 100; i <= 200; i++) {
console.log(i);
}
```

## 2. Write a program to find number of digit in given number

```
let num = 12345;
let count = 0;
while (num) {
  num = Math.trunc(num / 10);
  count++;
}
console.log(count);

```

## 3. Write a program to find sum of digit in a given number

```
let num = 65876;
let rem = 0;
let sum = 0;
while (num) {
  rem = num % 10;
  sum = sum + rem;
  num = Math.trunc(num / 10);
}
console.log(sum);
```

## 4. Write a program to find smallest digit in given number

```
let num = 876543;
let small = 9;
while (num) {
  let rem = num % 10;
  if (rem < small) {
    small = rem;
  }
  num = Math.floor(num / 10);
}

console.log(small);

```

## 5. Write a program to find greatest digit in a given number

```
let num = 8765943;
let max = 0;
while (num) {
  let rem = num % 10;
  if (rem > max) {
    max = rem;
  }
  num = Math.floor(num / 10);
}

console.log(max);
```

## 6. Sum of even and sum of odd

```
let num = 123456;
let even = 0;
let odd = 0;
while (num) {
  let rem = num % 10;
  if (rem % 2 == 0) {
    even += rem;
  } else {
    odd += rem;
  }
  num = Math.trunc(num / 10);
}
console.log(`Even: ${even}. Odd: ${odd}`);
```

## 7. Write a program to reverse a given number

```
let num = 12345;
let rev = 0;
while (num) {
  let rem = num % 10;
  rev = rev * 10 + rem;
  num = Math.trunc(num / 10);
}
console.log(rev);
```

## 8. check the given number is palindrom or not

```
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
```

## 9. Prime Number

```
let num = 6;
let flag = false;
if (num == 1) {
  console.log(`${num} is Not Prime`);
} else {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      flag = true;
      break;
    }
  }
  if (!flag) {
    console.log(`${num} is Prime`);
  } else {
    console.log(`${num} is Not Prime`);
  }
}
```

## 10. Neon Number

```
let num = 9;
let tmp = num;
let mul = num * num;
let sum = 0;
while (mul) {
  let rem = mul % 10;
  sum += rem;
  mul = Math.trunc(mul / 10);
}
if (tmp == sum) {
  console.log(`${tmp} == ${sum}. It's a Neon Number`);
} else {
  console.log(`${tmp} != ${sum}. It's not a Neon Number`);
}
```

## 11. Check the given number is armstrong number or not

```
let num = 153;
let tmp = num;
let sum = 0;
let count = 0;
while (num) {
  num = Math.trunc(num / 10);
  count++;
}
num = tmp;
while (num) {
  let rem = num % 10;
  //   sum += Math.pow(rem, count);
  let fact = 1;
  for (let i = 0; i < count; i++) {
    fact *= rem;
  }
  sum += fact;
  num = Math.trunc(num / 10);
}
if (sum == tmp) {
  console.log("It's armstrong number");
} else {
  console.log("It's not a armstrong number");
}
```

## 12. Check the given number is strong number or not

```
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
```

## 13. Check the given number is perfect number or not

```
let num = 6;

let sum = 0;
for (let i = 1; i < num; i++) {
  if (num % i == 0) {
    sum += i;
  }
}
if (sum == num) {
  console.log("it is a perfect number");
} else {
  console.log("it is not a perfect number");
}
```

## 14. automorphic number

```
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
```

## 15. Write a program to print palindrom number in a given range

```
for (let i = 1; i <= 100; i++) {
  let rev = 0;
  let num = i;
  while (num) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.trunc(num / 10);
  }
  if (i == rev) {
    console.log(`${i} is a palindrome`);
  }
}
```

## 16. Write a program to print alternative palindrome

```
let count = 0;
for (let i = 1; i <= 100; i++) {
  let rev = 0;
  let num = i;
  while (num) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.trunc(num / 10);
  }

  if (i == rev) {
    if (count % 2 == 0) {
      console.log(`${i} is a palindrome`);
    }
    count++;
  }
}

```

## 17. Write a program to find second highest palindrom in a given range

```
let max = 0,
  secondmax = 0;
for (let i = 1; i <= 100; i++) {
  let rev = 0;
  let num = i;
  while (num) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.trunc(num / 10);
  }

  if (i == rev) {
    if (i > max) {
      secondmax = max;
      max = i;
    }
  }
}
console.log(secondmax);
```

## 18. Write a program to find second highest palindrom in a given range

```
let count = 1;
for (let i = 100; i >= 1; i--) {
  let rev = 0;
  let num = i;
  while (num) {
    let rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.trunc(num / 10);
  }
  if (i == rev) {
    if (count == 2) {
      console.log(`${i} is a palindrome`);
      break;
    }
    count++;
  }
}
```

## 19. Write a program to print next palindrom number

```
let num = 77;
let next = num + 1;

while (true) {
  let rev = 0;
  let tmp = next;
  while (tmp) {
    let rem = tmp % 10;
    rev = rev * 10 + rem;
    tmp = Math.trunc(tmp / 10);
  }
  if (next == rev) {
    console.log(next);
    break;
  }
  next++;
}
```

## 20. Print prime number in a given range

```
function main() {
for (let i = 2; i <= 20; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

main();
```

## 21. Alternative prime number

```
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


```

## 22. Print last 3 prime number in a given range

```
function main() {
  let count = 0;
  for (let i = 20; i >= 2; i--) {
    if (isPrime(i)) {
      console.log(i);
      count++;
      if (count >= 3) {
        break;
      }
    }
  }
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

main();
```

## 23. Print first 3 prime number in a given range

```
function main() {
  let count = 0;
  for (let i = 2; i <= 20; i++) {
    if (isPrime(i)) {
      console.log(i);
      count++;
      if (count >= 3) {
        break;
      }
    }
  }
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

main();
```

## 24. Print next prime number

```
function main() {
  const num = 11;
  let i = num + 1;

  while (true) {
    if (isPrime(i)) {
      console.log(i);
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
```

## 25. take user number given next number to get prime number

```
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
```

## 26. write a program to print automorphic numbers in a given range

```
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
```

## 27.

```
*****
*****
*****
*****
*****
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    res += "*";
  }
  res += "\n";
}
console.log(res);
```

## 28.

```
11111
22222
33333
44444
55555
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    res += i;
  }
  res += "\n";
}
console.log(res);
```

## 29.

```
*
**
***
****
*****
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    res += "*";
  }
  res += "\n";
}
console.log(res);
```

## 30.

```
*****
****
***
**
*
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    res += "*";
  }
  res += "\n";
}
console.log(res);
```

## 31.

```
*****
*
*
*
*
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i == 1 || j == 1) {
      res += "*";
    }
  }
  res += "\n";
}
console.log(res);
```

## 32.

```
* * * * *
*       *
*       *
*       *
* * * * *
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i == 1 || i == 5 || j == 1 || j == 5) {
      res += "* ";
    } else {
      res += "  ";
    }
  }
  res += "\n";
}
console.log(res);
```

## 33.

```
*****

*****

*****
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i % 2 != 0) {
      res += "*";
    } else {
      res += " ";
    }
  }
  res += "\n";
}
console.log(res);
```

## 34.

```
* * * * *
*   *   *
* * * * *
*   *   *
* * * * *
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i % 2 != 0 || j == 5 || j == 1 || j == 3) {
      // if (i == j || i + j == 6) {
      res += "* ";
    } else {
      res += "  ";
    }
  }
  res += "\n";
}
console.log(res);
```

## 35.

```
*   *   *
*   *   *
*   *   *
*   *   *
*   *   *
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (j % 2 != 0) {
      res += "* ";
    } else {
      res += "  ";
    }
  }
  res += "\n";
}
console.log(res);
```

## 36.

```
1 * * * *
* 2 * * *
* * 3 * *
* * * 4 *
* * * * 5
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i == j) {
      res += `${i} `;
    } else {
      res += "* ";
    }
  }
  res += "\n";
}
console.log(res);
```

## 37.

```
1 * * * 1
* 2 * 2 *
* * 3 * *
* 4 * 4 *
5 * * * 5
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i == j || i + j == 6) {
      res += `${i} `;
    } else {
      res += "* ";
    }
  }
  res += "\n";
}
console.log(res);
```

## 38.

```
1
2 1
3 2 1
4 3 2 1
5 4 3 2 1
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = i; j >= 1; j--) {
    res += `${j} `;
  }
  res += "\n";
}
console.log(res);
```

## 39.

```
5
4 5
3 4 5
2 3 4 5
1 2 3 4 5
```

```
let res = "";
for (let i = 5; i >= 1; i--) {
  for (let j = i; j <= 5; j++) {
    res += `${j} `;
  }
  res += "\n";
}
console.log(res);
```

## 40

```
5
5 4
5 4 3
5 4 3 2
5 4 3 2 1
```

```
let res = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 5; j >= i; j--) {
    res += `${j} `;
  }
  res += "\n";
}
console.log(res);
```

## 41.

```
*
* *
7 8 9
* * * *
* * * * *
```

```
let res = "";
let a = 7;
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    if (i == 3) {
      res += `${a++} `;
    } else {
      res += "* ";
    }
  }
  res += "\n";
}
console.log(res);
```

## 42.

```
* * * * *
  * * * *
    * * *
      * *
        *
```

```
let res = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 5; j > i; j--) {
    res += "  ";
  }
  for (let j = 1; j <= i; j++) {
    res += "* ";
  }
  res += "\n";
}
console.log(res);
```

## 43.

```
1 2 3 4 5
  2 3 4 5
    3 4 5
      4 5
        5
```

```
let res = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j < i; j++) {
    res += "  ";
  }
  for (let j = i; j <= 5; j++) {
    res += j + " ";
  }
  res += "\n";
}
console.log(res);
```

# 44.

```
1 2 3 4 5
  1 2 3 4
    1 2 3
      1 2
        1
```

```
let res = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 5; j > i; j--) {
    res += "  ";
  }
  for (let j = 1; j <= i; j++) {
    res += j + " ";
  }
  res += "\n";
}
console.log(res);
```

# 45.

```
5 4 3 2 1
  5 4 3 2
    5 4 3
      5 4
        5
```

```
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
```

# 46.

```
 5
 5  4
 5  4  3
 5  4  3  2
 5  4  3  2  1
```

```
let res = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 5; j >= i; j--) {
    res += ` ${j} `;
  }
  res += "\n";
}
console.log(res);
```

# 47.

```
        *
      * * *
    * * * * *
  * * * * * * *
* * * * * * * * *
```

```
let n = 5;
let res = "";
let stars = 1;
let spaces = 9;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= spaces; j++) {
    res += "  ";
  }

  for (let j = 1; j <= stars; j++) {
    res += "* ";
  }
  res += "\n";
  spaces--;
  stars += 2;
}
console.log(res);
```

# 48.

```
* * * * * * * * *
  * * * * * * *
    * * * * *
      * * *
        *
```

```
let n = 5;
let res = "";
let stars = 9;
let spaces = 0;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= spaces; j++) {
    res += "  ";
  }

  for (let j = 1; j <= stars; j++) {
    res += "* ";
  }
  res += "\n";
  spaces++;
  stars -= 2;
}
console.log(res);
```

# 49.

```
        *
      *   *
    *       *
  *           *
* * * * * * * * *
```

```
let n = 5;
let res = "";
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    res += "  ";
  }
  for (let j = 1; j <= 2 * i - 1; j++) {
    if (j == 1 || j == 2 * i - 1 || i == n) {
      res += "* ";
    } else {
      res += "  ";
    }
  }
  res += "\n";
}
console.log(res);
```

# 50.

```
* * * * * * * * *
  *           *
    *       *
      *   *
        *
```

```
let n = 5;
let res = "";
for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    res += "  ";
  }
  for (let j = 0; j < 2 * (n - i) - 1; j++) {
    if (j == 0 || j == 2 * (n - i) - 2 || i == 0) {
      res += "* ";
    } else {
      res += "  ";
    }
  }
  res += "\n";
}
console.log(res);
```

# 51.

```
*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*
```

```
let res = "";
let stars = 1;
let n = 9;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= stars; j++) {
    res += "* ";
  }
  res += "\n";
  if (i <= n / 2) {
    stars++;
  } else {
    stars--;
  }
}
console.log(res);
```

# 52.

```
        *
      * *
    * * *
  * * * *
* * * * *
  * * * *
    * * *
      * *
        *
```

```
let res = "";
let n = 9;
let stars = 1;
let spaces = 4;
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= spaces; j++) {
    res += "  ";
  }
  for (let j = 1; j <= stars; j++) {
    res += "* ";
  }
  res += "\n";
  if (i <= n / 2) {
    stars++;
    spaces--;
  } else {
    stars--;
    spaces++;
  }
}
console.log(res);
```

# at Method

- If we want to take each character from the given string then we can use at method.

#### Syntax

```
at(index)
```

- The return type of at method is one string.

# 53. Write a program to reverse a given string

```
let string = "Javascript";
let output = "";
for (let i = string.length - 1; i >= 0; i--) {
  output += string.charAt(i);
}
console.log(output);
```

# 54. Write a program to check weather the given string is palindrome or not

```
let string = "sos";
let output = "";
for (let i = string.length - 1; i >= 0; i--) {
  output += string[i];
}
if (output == string) {
  console.log("the given string is palindrome");
} else {
  console.log("the given string in not palindrome");
}
```

```
function palindrome(string) {
  string = string.toLowerCase().trim();
  let i = 0;
  let j = string.length - 1;
  while (i < j) {
    if (string.charAt(i) != string.charAt(j)) {
      return "Not a palindrome";
    }
    i++;
    j--;
  }
  return "palindrome";
}
console.log(palindrome("Java"));

```

# 55. write a program to print the palindrome of substring

```
let s1 = "malayalam";
for (let i = 0; i < s1.length; i++) {
  for (let j = i + 1; j < s1.length; j++) {
    let str = s1.slice(i, j + 1);
    if (palindrome(str)) {
      console.log(str);
    }
  }
}
function palindrome(string) {
  string = string.toLowerCase().trim();
  let i = 0;
  let j = string.length - 1;
  while (i < j) {
    if (string.charAt(i) != string.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
```

# 56. Write a program to print the biggest palindrome of substring

```
let s1 = "malayalam";
let long = "";

for (let i = 0; i < s1.length; i++) {
  for (let j = i + 1; j < s1.length; j++) {
    let str = s1.slice(i, j + 1);
    if (palindrome(str) && str.length > long.length) {
      long = str;
    }
  }
}

function palindrome(string) {
  string = string.toLowerCase().trim();
  let i = 0;
  let j = string.length - 1;
  while (i < j) {
    if (string.charAt(i) != string.charAt(j)) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

console.log(long);

```

```
let s1 = "Javascript";
s1 = s1.toUpperCase(s1);
console.log(s1);

let s2 = "Javascript";
s2.toUpperCase(s2);
console.log(s2);
```

# 57. Write a program to find occurance of each character

```
let string = "banana";
let arr = [...string];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == " ") continue;
  let count = 1;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
      arr[j] = " ";
    }
  }
  console.log(`${arr[i]} = ${count}`);
}
```

# 58. Write a program to remove duplicate character in a given string

```
let string = "banana";
let arr = [...string];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr[j] = " ";
    }
  }
  // console.log(arr[i]);
}
let result = arr.filter((e) => e != " ");
console.log(result);
```

# 59. Writea program to find maximum repeated character in a repeated string

```
let string = "banana";
let arr = [...string];
let max = 0;
let res = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == " ") continue;
  let count = 1;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
      arr[j] = " ";
    }
  }
  if (count > max) {
    max = count;
    res = arr[i];
  }
}
console.log(`${res} = ${max}`);
```

# 60. Write a program to print minimum repeated character in a given string

```
let string = "banana";
let arr = [...string];
let min = Infinity;
let res = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == " ") continue;
  let count = 1;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
      arr[j] = " ";
    }
  }
  if (count < min) {
    min = count;
    res = arr[i];
  }
}
console.log(`${res} = ${min}`);
```

# 61. Write a program to find ocurrence fo each word

```
let string = "if you smell what that the rock is cooking";
let arr = string.split(" ");
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == " ") continue;
  let count = 1;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
      arr[j] = " ";
    }
  }
  console.log(`${arr[i]} = ${count}`);
}
```

# 62. remove duplicate words in a given string

```
let string = "if you smell what that the rock is cooking";
let arr = string.split(" ");
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr[j] = " ";
    }
  }
}
let result = arr.filter((e) => e != " ");
console.log(result);
```

# 63. maximum repeated words in a given string

```
let string = "if you smell what that the rock is cooking";
let arr = string.split(" ");
let max = 0;
let res = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == " ") continue;
  let count = 1;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
      arr[j] = " ";
    }
  }
  if (count > max) {
    max = count;
    res = arr[i];
  }
}
console.log(`${res} = ${max}`);
```

# 64. minimum repeated word in a given string

```
let string = "if you smell what that the rock is cooking";
let arr = string.split(" ");
let min = Infinity;
let res = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == " ") continue;
  let count = 1;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
      arr[j] = " ";
    }
  }
  if (count < min) {
    min = count;
    res = arr[i];
  }
}
console.log(`${res} = ${min}`);
```

# 65. Write a program to find vowels in a given string

```
let s1 = "Dhruva@JSP12345";
s1 = s1.toLowerCase();
let count = 0;
let consonent = 0;
for (let i = 0; i < s1.length; i++) {
  let ch = s1.charAt(i);
  if (ch >= "a" && ch <= "z") {
    if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
      count++;
    } else {
      consonent++;
    }
  }
}
console.log("vowels = " + count);
console.log("consonent = " + consonent);
console.log("length = " + s1.length);
```

# 65. Write a program to find sum of digit in a given string

```
let string = "123csetr";
let sum = 0;
for (let i = 0; i < string.length; i++) {
  let ch = string.charAt(i);
  if (ch >= "0" && ch <= "9") {
    sum += +ch;
  }
}
console.log(sum);
```

```
let string = "Dhruva123Kumar45";
let store = "";
let sum = 0;
for (let i = 0; i < string.length; i++) {
  let ch = string.charAt(i);
  if (ch >= "0" && ch <= "9") {
    store += ch;
  } else if (store !== "") {
    sum += +store;
    store = "";
  }
  if (i == string.length - 1) {
    sum += +store;
  }
}
console.log(sum);
```

# 66. Write a program to reverse each word

```
let str = "Javascript is very easy";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}

console.log(rev);
```

# 67. "Javascript is very easy" reverse the code there itself

```
let str = "Javascript is very easy";
let arr = str.split(" ");
let rev = "";

for (let i = 0; i < arr.length; i++) {
  let s = arr[i];
  for (let j = s.length - 1; j >= 0; j--) {
    rev += s.charAt(j);
  }
  rev += " ";
}
console.log(rev);

```

# 68. Write a program to check the given string is anagram or not

```
function anagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  let a1 = [...str1];
  let b1 = [...str2];

  a1 = a1.sort();
  b1 = b1.sort();
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== b1[i]) {
      return false;
    }
  }
  return true;
}

console.log(anagram("care", "race"));
```

# 69. Write a pogram to replace a string without using replace method

```
let str = "pool";
let arr = [...str];
let replace = "";
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == "o") {
    arr[i] = "x";
    replace += arr[i];
  } else {
    replace += arr[i];
  }
}
console.log(replace);
```

```
let str = "Hello world";
let res = "";
for (let i = 0; i < str.length; i++) {
  if (
    str.charAt(i) == "l" &&
    str.charAt(i + 1) == "l" &&
    str.charAt(i + 2) == "o"
  ) {
    res += "xx";
    i += 2;
  } else {
    res += str.charAt(i);
  }
}
console.log(res);
```

# 70. Write a program to print sum or array

```
let arr = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);
```

# Searching

## 71. Linear Search

```
let arr = [10, 20, 30, 40, 50, 60];
let key = 50;
let flag = false;

for (let i = 0; i < arr.length; i++) {
  if (key == arr[i]) {
    flag = true;
    break;
  }
}

if (flag) {
  console.log(`${key} is available`);
} else {
  console.log(`${key} is not available`);
}
```

## 72. Binary Search

```
let arr = [10, 20, 30, 40, 50, 60];
let key = 10;

function binarySearch(arr, key, i, j) {
  while (i <= j) {
    let mid = Math.trunc((i + j) / 2);

    if (arr[mid] === key) {
      return mid;
    } else if (arr[mid] < key) {
      i = mid + 1;
    } else {
      j = mid - 1;
    }
  }

  return false;
}

const result = binarySearch(arr, key, 0, arr.length - 1);

if (result) {
  console.log(`Element ${key} found at index ${result}`);
} else {
  console.log(`Element ${key} not found in the array`);
}
```

# Sorting

# 73. Bubble Sort

```
let arr = [7, 1, 9, 2, 4, 6];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
for (let e of arr) {
  console.log(e);
}
```
