/**
 * 五 - 5
 * 二十五 - 25
 * 五十 - 50
 * @param str
 * @returns
 */
export function chineseToNumber(str: string): number {
  const numberMap = {
    零: 0,
    一: 1,
    二: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
    十: 10
  };
  const n = str.length;
  if (n === 1) return numberMap[str];
  let res = 0;
  let unit = 1;
  for (let i = n - 1; i >= 0; i--) {
    const char = str[i];
    if (char === '十') {
      unit = 10;
    } else {
      res += numberMap[char] * unit;
      unit = 1;
    }
  }
  if (unit !== 1) {
    res += 1 * unit;
  }
  return res;
}
