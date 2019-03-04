// write specs here

const { add, multiply } = require('./math.js');

test('adds two numbers', () => {
   expect(add(2, 2)).toBe(4);
   expect(add(5, 2)).toBe(7);
});

// This is more BDD: it's checking for behavior
it('math.add() should return null if arguments are not numbers', () => {
    expect(add()).toBeNull();
    expect(add(3, '4')).toBeNull();
});

