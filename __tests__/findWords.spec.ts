import findWords from '../src/findWords.js';

describe('findWords', () => {
  beforeAll(() => {
    console.log('Add necessary logic before running test cases.');
  });
  afterAll(() => {
    console.log('Add necessary logic after running test cases.');
  });
  it('should return an empty array if the input string is empty', () => {
    // foucs on test input string is empty
    expect(findWords('', ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good'])).toEqual(
      [],
    );
  });

  it('should return an empty array if the dictionary is empty', () => {
    // foucs on test dictionary is empty
    expect(findWords('ate', [])).toEqual([]);
  });

  it('should return an empty array if the input string and dictionary is empty', () => {
    // foucs on test input string and dictionary is empty
    expect(findWords('', [])).toEqual([]);
  });

  it('should return an empty array if no words is an anagram of the input string', () => {
    expect(findWords('ate', ['dog', 'do', 'god', 'goo', 'go', 'good'])).toEqual([]);
    expect(findWords('oooo', ['O', 'oO', 'Oo', 'OO', 'oooO', 'o o o'])).toEqual([]);
  });

  it('should return an array of words that are an anagram of the input string', () => {
    // This is the test cases listed in the provided doc
    expect(
      findWords('ate', ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good']),
    ).toEqual(['ate', 'eat', 'tea']);
    // This is the test cases listed in the provided doc
    expect(
      findWords('oogd', ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good']),
    ).toEqual(['dog', 'do', 'god', 'goo', 'go', 'good']);
    // focus on repeated characters, and upper case vs lower case
    expect(
      findWords('oooo', [
        '',
        'o',
        'oo',
        'ooo',
        'oooo',
        'ooooo',
        'oooooo',
        'ooooooo',
        'O',
        'OO',
        'OoO',
      ]),
    ).toEqual(['', 'o', 'oo', 'ooo', 'oooo']);
    // focus on complex cases
    expect(findWords('aabbcc', ['abc', 'aabb', 'bbcc', 'abcd', 'cba', 'abbc', 'ccbbaa'])).toEqual([
      'abc',
      'aabb',
      'bbcc',
      'cba',
      'abbc',
      'ccbbaa',
    ]);
    // focus on complex cases that contains a-z, but only have 1 character for each.
    expect(
      findWords('abcdefghijklmnopqrstuvwxyz', [
        'abc',
        'def',
        'ghi',
        'jkl',
        'mno',
        'pqr',
        'stu',
        'vwx',
        'yz',
        'aa',
        'abcc',
        'az',
        ' az',
      ]),
    ).toEqual(['abc', 'def', 'ghi', 'jkl', 'mno', 'pqr', 'stu', 'vwx', 'yz', 'az']);
  });
});
