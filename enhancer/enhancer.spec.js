const { repair } = require('./enhancer.js');

it('enhancer.repair() should reset durability to 100', () => {
    expect(repair()).toEqual(100);
})