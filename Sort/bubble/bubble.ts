import { getRamdom } from '../ramdom';

const bubbleSort = (numbers: number[]): number[] => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        const tmp = numbers[j + 1];
        numbers[j + 1] = numbers[j];
        numbers[j] = tmp;
      }
    }
  }
  return numbers;
};

console.log(bubbleSort(getRamdom(10, 1000)));
