export const generateRandomNum = (digitNum: number): number => {
  let result = "";

  for (let i = 0; i < digitNum; i++) {
    result += String(Math.floor(Math.random() * 10));
  }

  return parseInt(result);
};
