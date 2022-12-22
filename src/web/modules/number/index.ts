export const generateRandomNum = (digitNum: number): number => {
  let result = "";

  for (let i = 0; i < digitNum; i++) {
    const randomNum = String(Math.floor(Math.random() * 10));
    if (randomNum === "0") {
      --i;
      continue;
    }
    result += randomNum;
  }

  return generateRandomBoolean() ? -parseInt(result) : parseInt(result);
};

export const generateRandomPositiveNum = (digitNum: number): number => {
  let result = "";

  for (let i = 0; i < digitNum; i++) {
    const randomNum = String(Math.floor(Math.random() * 10));
    if (randomNum === "0") {
      --i;
      continue;
    }
    result += randomNum;
  }

  return parseInt(result);
};

export const generateRandomBoolean = (): boolean => {
  return Math.random() < 0.5;
};
