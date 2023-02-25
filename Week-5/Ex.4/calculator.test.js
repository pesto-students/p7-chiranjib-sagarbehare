const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
        expect(mathOperations.sum(1, 2)).toBe(3);
    });
})

describe("Calculator tests", () => {
    test('diff 1 - 2 should return -1', () => {
        expect(mathOperations.diff(1, 2)).toBe(-1);
    });
})

describe("Calculator tests", () => {
    test('Multiply 10 * 10 should return -1', () => {
        expect(mathOperations.product(10, 10)).toBe(100);
    });
})