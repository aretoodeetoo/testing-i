const { repair, fail, success } = require('./enhancer.js');

it('enhancer.repair() should reset durability to 100', () => {
    const item = {
        durability: 50
    }
    expect(repair(item).durability).toEqual(100);
});

it('Since enhancement is 15, durability should reduce to 90', () => {
    const item = {
        type: "weapon",
        name: "Sword of Isildur",
        durability: 100,
        enhancement: 15, 
    }

    expect(fail(item).durability).toEqual(90);
});

it('If enhancement is less than 14, durability should be reduced by 5', () => {
    const item = {
        type: "weapon",
        name: "Sword of Isildur",
        durability: 100,
        enhancement: 13, 
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

it('success() should update the name', () => {
    const item = {
        type: "weapon",
        name: "Sword of Isildur",
        durability: 100,
        enhancement: 0, 
    };

    expect(success(item).name).toBe('+1 Sword of Isildur');
})