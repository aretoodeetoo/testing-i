module.exports = {
    success,
    fail,
    repair,
};

// item = {
//     type: "weapon",
//     name: "Sword of Isildur",
//     durability: 100,
//     enhancement: 0,
// }

const PRI = 16;
const DUO = 17;
const TRI = 18;
const TET = 19;
const PEN = 20;

function success(item){
    let enhancer = item.enhancement;
    return {
        ...item,
        enhancement: enhancer + 1,
    }
}

function fail(item){
    const enhanceFail = Object.assign({}, item);
    let e = enhanceFail.enhancement;
    let d = enhanceFail.durability;
    if (e <= 14 && d < 25) {
        return null;
    } else if (e >= 15 && d < 10) {
        return null;
    } else if (e <= 14) {
        return {
            ...item,
            durability: d - 5,
        }
    } else if (e > 14) {
        return {
            ...item,
            durability: d - 10,
        }
    } else if (e > PRI){
        return {
            ...item,
            durability: e - 1,
        }
    }
}

function repair(item){
    const repairedItem = {
        ...item,
        durability: 100,
    };

    return repairedItem;
}

// const enhancementIncrement = () => {
//     let enhanced = 0;
//     return function() {
//         enhanced++;
//         return enhanced;
//     }
// }

// const enhancer = enhancementIncrement();