let n = 5;
let string = "";
// Upside Portion
for (let i = 1; i <= n; i++) {
  //    printing spaces
  for (let j = n; j > i; j--) {
    string = string + " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string = string + "*";
  }
  string = string + "\n";
}
// downside portion
for (let i = 1; i <= n - 1; i++) {
  // priniting spaces
  for (let j = 0; j < i; j++) {
    string = string + " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string = string + "*";
  }
  string = string + "\n";
}
console.log(string);

// Diamond Pattern
