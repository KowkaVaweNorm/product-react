export const isNumber = (value: any): boolean => {
  // Ищем символ в любом алфавите
  const reg = /\p{Letter}/gmiu;
  return !reg.test(value);
};
