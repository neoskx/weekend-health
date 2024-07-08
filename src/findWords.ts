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
  // Get the input string character count map. Pre-compute this to avoid recomputing for each word in the dictionary to improve the performance.
  const charCountMap = getCharsCountMap(inputString);
  // store the words that are an anagram of the input string
  const words: string[] = [];

  for (const word of dictionary) {
    if (isAnagramWord(word, charCountMap)) {
      // If the word is an anagram of the input string, add it to the `words`.
      words.push(word);
    }
  }
  return words;
}

/**
 * Get the character count map for a given string.
 *
 * @param {string} str - The input string.
 * @returns {Map<string, number>} A map of characters to their count in the input string.
 */
function getCharsCountMap(str: string): Map<string, number> {
  // Create a map to store the count of each character in the string.
  // If we need to valid the `str` like only support a-z, A-Z, we can add a validation here.
  const charsCountMap = new Map<string, number>();
  for (const char of str) {
    charsCountMap.set(char, (charsCountMap.get(char) || 0) + 1);
  }
  return charsCountMap;
}

/**
 * Check if a word can be formed using the characters from the given character count map.
 *
 * @param {string} word - The word to check.
 * @param {Map<string, number>} charsCountMap - The character count map to check against.
 * @returns {boolean} True if the word is an anagram of the characters in the character count map, false otherwise.
 */
function isAnagramWord(word: string, charsCountMap: Map<string, number>): boolean {
  const wordCharsCountMap = getCharsCountMap(word);
  // Check if the count of each character in the word is less than or equal to the count of the same character in the input string.
  for (const [char, count] of wordCharsCountMap) {
    // when the count of the character in the word is greater than the count of the character in the input string, return false.
    // This include the case that the character is not in the input string.
    if (count > (charsCountMap.get(char) || 0)) {
      return false;
    }
  }

  return true;
}

export default findWords;
