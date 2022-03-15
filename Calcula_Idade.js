function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade. `;
}

const pessoa1 = {
    nome: 'João',
    idade: 33,
}

const pessoa2 = {
    nome: 'Daniela',
    idade: 26,
}

const animal = {
    nome: 'Kelly',
    idade: 6,
};

//console.log(calculaIdade.call(pessoa1, 35)); ----> USANDO CALL

console.log(calculaIdade.apply(pessoa2, [35])); //----> USANDO APPLY



