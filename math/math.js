module.exports = {
    add,
    multiply
};

function add(a, b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    } else {
        return null;
    }
};

function multiply(a, b){
    return a * b;
}