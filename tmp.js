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
