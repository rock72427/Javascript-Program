function anagrams(str1, str2) {
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

console.log(anagrams("care", "race"));
