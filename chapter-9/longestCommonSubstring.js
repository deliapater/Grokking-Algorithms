/**
 * Exercise 9.3
 * ---------------
 * Finds the longest common substring between two strings
 *
 * @param {string} str1 - First string
 * @param {string}  str2 - Second string
 * @returns {{length: number, substring: string, grid: number[][]}} -  Object
 */

function longestCommonSubstring(str1, str2) {
  {
    const rows = str1.length;
    const cols = str2.length;

    const grid = Array.from({ length: rows + 1 }, () =>
      Array(cols + 1).fill(0)
    );

    let longest = 0;
    endIndex = 0;

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          grid[i][j] = grid[i - 1][j - 1] + 1;
          if (grid[i][j] > longest) {
            longest = grid[i][j];
            endIndex = i;
          }
        } else {
          grid[i][j] = 0;
        }
      }
    }
    const lcs = str1.substring(endIndex - longest, endIndex);
    return { length: longest, substring: lcs, grid };
  }
}

const result = longestCommonSubstring("blue", "clues");
console.log("Longest Common Substring:", result.substring);
console.log("Length:", result.length);
console.log("Grid:", result.grid);
