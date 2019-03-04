const { repair, fail, success } = require('./enhancer.js');

it('enhancer.repair() should reset durability to 100', () => {
    const item = {
        durability: 50
    }
    expect(repair(item).durability).toEqual(100);
});

it('fail() should modify the object according to failure specs', () => {
    const item = {
        type: "weapon",
        name: "Sword of Isildur",
        durability: 100,
        enhancement: 0, 
    }

    expect(fail(item).durability).toEqual(95);
});

it('success() should increase enhancement by 1', () => {
    const item = {
        type: "weapon",
        name: "Sword of Isildur",
        durability: 100,
        enhancement: 0, 
    };

    expect(success(item).enhancement).toEqual(1);
})