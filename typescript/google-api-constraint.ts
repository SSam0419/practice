function generate(arr1: any[], arr2: any[]) {
  if (arr1.length + arr2.length >= 20) throw new Error("Constraint Violated");
  if (arr1.length > 25 || arr2.length > 25)
    throw new Error("Constraint Violated");

  let combinations: [any, any][] = [];

  for (const element of arr1) {
    for (const item of arr2) {
      combinations.push([element, item]);
    }
  }

  return combinations;
}

function splitAndGenerate(arr1: any[], arr2: any[]) {
  const maxTotalSize = 19; // Maximum combined size that generate can handle
  let allCombinations: [any, any][] = [];

  for (let i = 0; i < arr1.length; i++) {
    const chunk1 = [arr1[i]]; // Take one element from arr1

    for (let j = 0; j < arr2.length; j += maxTotalSize - 1) {
      const chunk2 = arr2.slice(
        j,
        Math.min(j + (maxTotalSize - 1), arr2.length)
      );

      try {
        // call google api for chunk1 and chunk2 here ?
        console.log({ chunk1: chunk1.length, chunk2: chunk2.length });
        const combinations = generate(chunk1, chunk2);

        allCombinations = allCombinations.concat(combinations);
      } catch (error) {
        console.log(`Unexpected error: ${error.message}`);
      }
    }
  }

  return allCombinations;
}

// Example usage:
const arr1 = Array.from({ length: 31 }, (_, i) => `A${i}`);
const arr2 = Array.from({ length: 21 }, (_, i) => `B${i}`);

const result = splitAndGenerate(arr1, arr2);
console.log(result);
console.log(`Total combinations: ${result.length}`);
