export const getrandom = (num: number, max: number): number[] => {
  const numbers: number[] = [];
  for (let i = 0; i < num; i++) {
    numbers.push(Math.floor(Math.random() * max));
  }

  return numbers;
};
