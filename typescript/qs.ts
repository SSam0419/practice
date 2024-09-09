const unsortedArray = [1, 4, 2, 5, 2, 7, 3];

function quickSort(arr: number[], low: number, high: number) {
  if (low >= high) return;
  const pivotIndex = partition(arr, low, high);
  quickSort(arr, low, pivotIndex - 1);
  quickSort(arr, pivotIndex + 1, high);
}

function partition(arr: number[], low: number, high: number): number {
  const pivot = arr[high];
  let index = low - 1;
  for (let i = low; i < high; i++) {
    if (arr[i] < pivot) {
      index++;
      //swap
      const temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }

  index++;
  // swap pivot
  const temp = arr[high];
  arr[high] = arr[index];
  arr[index] = temp;

  return index;
}

quickSort(unsortedArray, 0, unsortedArray.length - 1);
console.log(unsortedArray);
