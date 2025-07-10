const MAX_LENGTH = 20;

export const stringCutter = (str: string, max: number = MAX_LENGTH) => {
  return str.length > max ? str.substring(0, max) + "..." : str;
};
