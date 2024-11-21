"use strict";
const aluno = {
    nome: "Roni",
    idade: 49,
    endereco: "Rua A",
    matriculaAtiva: true,
};
const aluno2 = {
    nome: "Rone",
    idade: 94,
    time: "A",
    endereco: "Rua B",
    matriculaAtiva: false,
};
function imprimir(aluno) {
    console.log(aluno);
}
imprimir(aluno);
imprimir(aluno2);
imprimir({
    nome: "Inor",
    idade: 99,
    endereco: "Avenida",
    matriculaAtiva: true,
});
