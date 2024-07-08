import findWords from '../src/findWords.js';

describe('findWords', () => {
  beforeAll(() => {
    console.log('Running findWords tests...');
  });
  afterAll(() => {
    console.log('findWords tests completed.');
  });
  it('should return an empty array if the input string is empty', () => {
    expect(findWords('', ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good'])).toEqual(
      [],
    );
  });

  it('should return an empty array if the dictionary is empty', () => {
    expect(findWords('ate', [])).toEqual([]);
  });

  it('should return an empty array if no words can be formed from the input string', () => {
    expect(findWords('ate', ['dog', 'do', 'god', 'goo', 'go', 'good'])).toEqual([]);
  });

  it('should return an array of words that can be formed from the input string', () => {
    expect(
      findWords('ate', ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good']),
    ).toEqual(['ate', 'eat', 'tea']);
    expect(
      findWords('oogd', ['ate', 'eat', 'tea', 'dog', 'do', 'god', 'goo', 'go', 'good']),
    ).toEqual(['dog', 'do', 'god', 'goo', 'go', 'good']);
  });
});
