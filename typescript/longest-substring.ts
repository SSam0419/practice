const s = "pwwkew";
let longestCount = 0;

let temp = "";
for (const c of s) {
  while (temp.includes(c)) {
    temp = temp.substring(1, temp.length);
  }

  temp += c;
  longestCount = Math.max(temp.length, longestCount);
}
console.log({ longestCount });
