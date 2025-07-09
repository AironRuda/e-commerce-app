const MAX_LENGTH = 20;

export const stringCutter = (str: string) => {
  return str.length > MAX_LENGTH ? str.substring(0, MAX_LENGTH) + "..." : str;
};
