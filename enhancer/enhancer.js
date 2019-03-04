module.exports = {
    success,
    fail,
    repair,
};

item = {
    type: "weapon",
    name: "Sword of Isildur",
    durability: 75
}

function success(item){

}

function fail(item){

}

function repair(item){
    const repairedItem = {
        ...item,
        durability: 100,
    };

    return repairedItem;
}

const enhancementIncrement = () => {
    let enhanced = 0;
    return function() {
        enhanced++;
        return enhanced;
    }
}

const enhancer = enhancementIncrement();