/**
 * Finds words from the dictionary that can be formed by rearranging some or all of the letters in the input string.
 * Each letter in the input string may be used up to once per word.
 *
 * @param {string} inputString - The input string containing letters to be used for forming words.
 * @param {string[]} dictionary - An array of words to check against the input string.
 * @returns {string[]} An array of words from the dictionary that can be formed using the letters from the input string.
 * @example
 *
 * findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"])
 * // => ["ate", "eat", "tea"]
 *
 * findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"])
 * // => ["dog", "do", "god", "goo", "go", "good"]
 */
function findWords(inputString: string, dictionary: string[]): string[] {
  console.log('inputString: ', inputString);
  console.log('dictionary: ', dictionary);
  return [];
}

export default findWords;
