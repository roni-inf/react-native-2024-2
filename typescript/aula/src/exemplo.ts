class Pessoa {
  nome: string;
  email: string;

  constructor(nome: string, email: string) {
    this.nome = nome;
    this.email = email;
  }
}

const pessoa1 = new Pessoa("Adriana", "adriana@gmail.com");
