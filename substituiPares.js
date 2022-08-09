function substituiPares(array) {
    if (!array) return -1;
    if (!array.length) return -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            console.log("Este número já é zero!");
        } else if (array[i] % 2 === 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }


    return array;
}

let arr = [1, 4, 5, 6, 3, 7, 8, 9, 0, 5, 6, 8];
console.log(substituiPares(arr));