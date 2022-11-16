export const generateRandomNum = (digitNum: number): number => {
  let result = "";

  for (let i = 0; i < digitNum; i++) {
    result += String(Math.floor(Math.random() * 10));
  }

  return generateRandomBoolean() ? -parseInt(result) : parseInt(result);
};

export const generateRandomBoolean = (): boolean => {
  return Math.random() < 0.5;
};
