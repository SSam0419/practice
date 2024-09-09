const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const len = numbers.length;
let max = 0;
let curSum = 0;

//think about prefix and suffix, if prefix is negative, what is
//the point of adding it to the current sum ?

for (const num of numbers) {
  curSum += num;
  max = max < curSum ? curSum : max;

  if (curSum < 0) {
    curSum = 0;
  }
}

console.log(max);
