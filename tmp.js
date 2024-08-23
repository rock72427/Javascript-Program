// let res = "";
// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     res += `  `;
//   }
//   for (let j = i; j <= 5; j++) {
//     res += `* `;
//   }
//   res += "\n";
// }
// console.log(res);

// let res = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     res += `  `;
//   }
//   for (let j = 1; j <= i; j++) {
//     res += `${j} `;
//   }
//   res += "\n";
// }
// console.log(res);

// let res = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 5; j >= i; j--) {
//     res += `  `;
//   }
//   for (let j = i; j >= 1; j--) {
//     res += `${j} `;
//   }
//   res += "\n";
// }
// console.log(res);

// let res = "";
// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     res += `  `;
//   }
//   for (let j = i; j <= 5; j++) {
//     res += `${j} `;
//   }
//   res += "\n";
// }
// console.log(res);

// let res = "";
// for (let i = 5; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     res += `  `;
//   }
//   for (let j = 5; j >= i; j--) {
//     res += `${j} `;
//   }
//   res += "\n";
// }
// console.log(res);

// let res = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     res += "  ";
//   }
//   for (let j = 5; j >= i; j--) {
//     res += `${j} `;
//   }
//   res += "\n";
// }
// console.log(res);

// let res = "";
// for (let i = 5; i >= 1; i--) {
//   for (let j = 5; j >= i; j--) {
//     res += "  ";
//   }
//   for (let j = i; j >= 1; j--) {
//     res += `${j} `;
//   }
//   res += "\n";
// }
// console.log(res);

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

let rows = 5;
let pattern = "";
for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  for (let k = 1; k <= (rows - i) * 2; k++) {
    pattern += "  ";
  }
  for (let l = 1; l <= i; l++) {
    pattern += "* ";
  }
  pattern += "\n";
}
for (let i = rows; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  for (let k = 1; k <= (rows - i) * 2; k++) {
    pattern += "  ";
  }
  for (let l = 1; l <= i; l++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);
