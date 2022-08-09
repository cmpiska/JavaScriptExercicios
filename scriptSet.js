const meuArray = [30, 30, 40, 5, 400, 300, 600, 443];

function valoresUnicos(arr) {
    const mySet = new Set(arr);
    return [...mySet];

}

console.log(valoresUnicos(meuArray));