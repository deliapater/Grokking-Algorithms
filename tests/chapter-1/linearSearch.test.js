const {
    findNameByPhoneNumber,
    readAllPhoneNumbers
} = require("../../chapter-1/linearSearch")

const linearSearch = require("../../chapter-1/linearSearch")

const samplePhoneBook = [
    { name: "Alice", phone: "555-0101" },
    { name: "Bob", phone: "555-0102" },
    { name: "Charlie", phone: "555-0103" },
    { name: "Diana", phone: "555-0104" },
    { name: "Eve", phone: "555-0105" },
  ];

describe('findNameByPhoneNumber', () => {
    test('should return the correct name when the phone number exists', () => {
        expect(findNameByPhoneNumber(samplePhoneBook, '555-0104')).toBe('Diana');
    });

    test('should return null when the phone number does not exist', () => {
        expect(findNameByPhoneNumber(samplePhoneBook, '555-9999')).toBeNull();
    });
    test('should return the first match in case of duplicates', () => {
        const duplicatePhoneBook = [
            { name: 'Tom', phone: '123' },
            { name: 'Jerry', phone: '123' },
        ];
        expect(findNameByPhoneNumber(duplicatePhoneBook, '123')).toBe('Tom');
    });
});

describe('readAllPhoneNumbers', () => {
    test('should call console.log for each entry', () => {
      const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
      
      const sampleBook = [
        { name: "Alice", phone: "555-0101" },
        { name: "Bob", phone: "555-0102" }
      ];
      
      linearSearch.readAllPhoneNumbers(sampleBook);
  
      expect(spy).toHaveBeenCalledTimes(sampleBook.length);
      
      spy.mockRestore();
    });
  });