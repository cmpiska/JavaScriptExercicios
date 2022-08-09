const alunos = [{
        nome: 'Paulo',
        nota: '7',
        turma: '1A',
    },

    {
        nome: 'Luiz',
        nota: '5',
        turma: '2A',
    },

    {
        nome: 'Zé',
        nota: '9',
        turma: '1A',
    },

    {
        nome: 'Caio',
        nota: '7',
        turma: '1B',
    },

    {
        nome: 'Maria',
        nota: '9',
        turma: '2B',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];
        if (nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 6))