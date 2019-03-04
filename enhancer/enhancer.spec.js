const { repair } = require('./enhancer.js');

it('enhancer.repair() should reset durability to 100', () => {
    const item = {
        durability: 50
    }
    expect(repair(item).durability).toEqual(100);
})