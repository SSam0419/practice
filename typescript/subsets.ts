function subsets(numbers: number[]) {
  const result: number[][] = [];

  function backtrackHelper(current: number[], index: number) {
    result.push([...current]);
    for (let i = index; i < numbers.length; i++) {
      current.push(numbers[i]);
      backtrackHelper(current, ++index);
      current.pop();
    }
  }

  backtrackHelper([], 0);
  return result;
}

const temp = [1, 2, 3];

console.log(subsets(temp));
