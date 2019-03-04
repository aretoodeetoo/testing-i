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
    return enhancer ++;
}

function fail(item){
    let e = item.enhancement;
    let d = item.durability;
    if (e <= 14 && d < 25) {
        return failure;
    } else if (e >= 15 && d < 10) {
        return failure;
    } else if (e <= 14) {
        return d - 5;
    } else if (e > 14) {
        return d - 10;
    } else if (e > PRI){
        e - 1;
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