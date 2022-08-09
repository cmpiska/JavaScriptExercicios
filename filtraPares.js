function filtraPares(arr) {
    return arr.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

const meuArray = [1, 21, 35, 40, 42, 45, 50, 53, 62, 70];

console.log(filtraPares(meuArray));