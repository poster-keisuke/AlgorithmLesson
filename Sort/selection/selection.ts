import { getrandom } from '../random';

const selectionSort = (numbers: number[]): number[] => {
  for (let i = 0; i < numbers.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[minIndex] > numbers[j]) {
        minIndex = j;
      }
    }

    const tmp = numbers[minIndex];
    numbers[minIndex] = numbers[i];
    numbers[i] = tmp;
  }

  return numbers;
};

console.log(selectionSort(getrandom(10, 1000)));
