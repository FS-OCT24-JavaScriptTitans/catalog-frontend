export const getFormatValue = (value: string, length: number): string => {
  const words = value.split(' ');

  return words.length > length ? words.slice(0, 2).join(' ') : value;
};
