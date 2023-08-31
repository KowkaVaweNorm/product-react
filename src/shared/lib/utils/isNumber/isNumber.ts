export const isNumber = (value: any): boolean => {
  if (value === '') return false;
  // Ищем символ в любом алфавите
  const reg = /\p{Letter}/gmiu;
  return !reg.test(value);
};
