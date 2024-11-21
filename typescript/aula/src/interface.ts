interface Aluno {
  nome: string;
  idade: number;
  time?: string;
  endereco: string;
  matriculaAtiva: boolean;
}

const aluno: Aluno = {
  nome: "Roni",
  idade: 49,
  endereco: "Rua A",
  matriculaAtiva: true,
};
const aluno2: Aluno = {
  nome: "Rone",
  idade: 94,
  time: "A",
  endereco: "Rua B",
  matriculaAtiva: false,
};

function imprimir(aluno: Aluno): void {
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
