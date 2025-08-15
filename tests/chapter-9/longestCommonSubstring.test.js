const {
  longestCommonSubstring,
} = require("../../chapter-9/longestCommonSubstring");

describe("longestCommonSubstring", () => {
  test("finds the longest common substring for basic example", () => {
    const result = longestCommonSubstring("blue", "clues");
    expect(result.length).toBe(3);
    expect(result.substring).toBe("lue");
  });

  test("returns entire string if strings are identical", () => {
    const result = longestCommonSubstring("hello", "hello");
    expect(result.length).toBe(5);
    expect(result.substring).toBe("hello");
  });

  test("returns length 0 and empty substring if there is no match", () => {
    const result = longestCommonSubstring("abc", "xyz");
    expect(result.length).toBe(0);
    expect(result.substring).toBe("");
  });

  test("finds common substring when match is at start", () => {
    const result = longestCommonSubstring("abcedef", "abczzz");
    expect(result.length).toBe(3);
    expect(result.substring).toBe("abc");
  });

  test("finds common substring when martch is at end", () => {
    const result = longestCommonSubstring("12345", "xx345");
    expect(result.length).toBe(3);
    expect(result.substring).toBe("345");
  });

  test("returns correct result for overlapping patterns", () => {
    const result = longestCommonSubstring("abab", "baba");
    expect(["aba", "bab"]).toContain(result.substring);
    expect(result.length).toBe(3);
  });

  test("handles empty first string", () => {
    const result = longestCommonSubstring("", "abc");
    expect(result.length).toBe(0);
    expect(result.substring).toBe("");
  });

  test("handles empty second string", () => {
    const result = longestCommonSubstring("abc", "");
    expect(result.length).toBe(0);
    expect(result.substring).toBe("");
  });

  test("grid is correctly sized", () => {
    const str1 = "ab";
    const str2 = "abc";
    const result = longestCommonSubstring(str1, str2);
    expect(result.grid.length).toBe(str1.length + 1);
    expect(result.grid[0].length).toBe(str2.length + 1);
  });
});