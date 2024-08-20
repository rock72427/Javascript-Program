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
