/**
 * @url https://www.hackerrank.com/challenges/the-birthday-bar/problem
 */

export function solveBirthdayBar(
  _: number,
  s: number[],
  d: number,
  m: number
): number {
  // Complete this function
  function sum(a: number, b: number): number {
    return a + b;
  }

  const slices: number[][] = s.reduce(
    (acc: number[][], _: number, i: number) => {
      acc.push(s.slice(i, i + m));

      return acc;
    },
    []
  );

  return slices.filter((s: number[]) => s.length === m && s.reduce(sum) === d)
    .length;
}
