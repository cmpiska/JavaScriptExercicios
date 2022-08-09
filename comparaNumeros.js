function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return `Defina os dois números solicitados!`;

    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = ``;

    if (num1 !== num2) {
        saoIguais = `não`;
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais. `;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = `menor`
    let resultado20 = `menor`

    const compara10 = soma > 10; // true or false
    const compara20 = soma > 20; // true or false
    const igual10 = soma == 10;
    const igual20 = soma == 20;

    if (compara10) {
        resultado10 = `maior que`;
    }
    if (igual10) {
        resultado10 = `igual`;
    }

    if (compara20) {
        resultado20 = `maior que`;
    }

    if (igual20) {
        resultado20 = `igual`;
    }

    return `Sua soma  é ${soma}, que é ${resultado10} 10 e ${resultado20} 20. `;

}

console.log(comparaNumeros(10, 5));