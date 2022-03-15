const alunos = [
  {
    nome: `Pedro`,
    nota: 9,
    turma: `12`,
  },
  {
    nome: `Carlos`,
    nota: 5,
    turma: `12`,
  },
  {
    nome: `Paulo`,
    nota: 8,
    turma: `8C`,
  },
  {
    nome: `Leticia`,
    nota: 3,
    turma: `6B`,
  },
];

function alunosAprovados(arr, media) {
  let aprovados = [];

  for (let i = 0; i < arr.length; i++) {
    const { nota, nome } = arr[i];

    if (arr[i].nota >= media) {
      aprovados.push(arr[i].nome);
    }
  }

  return aprovados;
}

console.log(alunosAprovados(alunos, 7));
