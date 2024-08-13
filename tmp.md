# 1. Write a program to print number from 100 to 200

```
for (let i = 100; i <= 200; i++) {
console.log(i);
}
```

# 2. Write a program to find number of digit in given number

```
let num = 12345;
let count = 0;
while (num) {
  num = Math.trunc(num / 10);
  count++;
}
console.log(count);

```

# 3. Write a program to find sum of digit in a given number

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

# 4. Write a program to find smallest digit in given number

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

# 5. Write a program to find greatest digit in a given number

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

# 6. Sum of even and sum of odd

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

# 7. Write a program to reverse a given number

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

# 8. check the given number is palindrom or not

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

# 9. Prime Number

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

# 10. Neon Number

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

11. Check the given number is armstrong number or not

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

11. Check the given number is strong number or not

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
