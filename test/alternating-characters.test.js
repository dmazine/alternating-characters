const alternatingCharacters = require('../src/alternating-characters');

test('test case #1', () => {
    const s = 'AAAA';
    expect(alternatingCharacters(s)).toBe(3);
});

test('test case #2', () => {
    const s = 'BBBBB';
    expect(alternatingCharacters(s)).toBe(4);
});

test('test case #3', () => {
    const s = 'ABABABAB';
    expect(alternatingCharacters(s)).toBe(0);
});

test('test case #4', () => {
    const s = 'BABABA';
    expect(alternatingCharacters(s)).toBe(0);
});

test('test case #5', () => {
    const s = 'AAABBB';
    expect(alternatingCharacters(s)).toBe(4);
});
