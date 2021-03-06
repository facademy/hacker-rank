import { pascalize } from '../utils';

export const specSource = (problem: string) => `/**
 * Test specs for ${problem} problem
 * @url https://www.hackerrank.com/challenges/${problem}/problem
 */

import { solve${pascalize(problem)} } from './${problem}';

describe('${pascalize(problem)}', () => {
  describe('solve${pascalize(problem)}', () => {
    it('should return when input ', () => {
      expect(solve${pascalize(problem)}()).toEqual();
    });

    it('should return when input ', () => {
      expect(solve${pascalize(problem)}()).toEqual();
    });
  });
});
`;
