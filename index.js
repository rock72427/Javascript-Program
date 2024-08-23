// Write a program to check weather the given string is palindrome or not
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
    return "palindrome";
  }
}
console.log(palindrome("ava"));
