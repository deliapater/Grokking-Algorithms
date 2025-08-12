const { hashA, hashB, hashC, hashD } = require("../../chapter-5/hashTables");

describe("hash functions", () => {
  describe("hashA", () => {
    test("always returns 1 % hashSize regardless of key", () => {
      expect(hashA("anything", 10)).toBe(1 % 10);
      expect(hashA("differentKey", 5)).toBe(1 % 5);
      expect(hashA("", 7)).toBe(1 % 7);
    });
  });

  describe("hashB", () => {
    test("returns length of key modulo hashSize", () => {
      expect(hashB("abc", 10)).toBe(3);
      expect(hashB("abcdef", 4)).toBe(6 % 4);
    });

    test("returns 0 for empty string", () => {
      expect(hashB("", 5)).toBe(0);
    });
  });

  describe("hashC", () => {
    test("hashes based of first character ASCII code modulo hashSize", () => {
      const aCode = "a".charCodeAt(0);
      expect(hashC("apple", 10)).toBe(aCode % 10);

      const bCode = "b".charCodeAt(0);
      expect(hashC("Banana", 7)).toBe(bCode % 7);
    });

    test("works for single-character keys", () => {
      expect(hashC("z", 10)).toBe("z".charCodeAt(0) % 10);
    });
  });

  describe("hashD", () => {
    test("computes sum of mapped primes modulo hashSize", () => {
      //"abc" -> 2 + 3 + 5 = 10
      expect(hashD("abc", 10)).toBe(10 % 10);

      //"az" -> 2 + 101 = 103
      expect(hashD("az", 50)).toBe(103 % 50);
    });

    test("ignores characters not in primeMap", () => {
      //"a!" -> 2
      expect(hashD("a!", 10)).toBe(2 % 10);
    });

    test("is case-sensitive", () => {
      expect(hashD("abc", 10)).toBe(hashD("ABC", 10));
    });

    test("returns 0 for empty string", () => {
      expect(hashD("", 7)).toBe(0);
    });
  });
});
