const arrow = (username: string): string => {
  let message = "Bem vindo:" + username;
  return message;
};

console.log(arrow("Fulano"));

function cadastro(nome: string, situacao?: boolean, email?: string): boolean {
  console.log(`${nome} ${situacao} ${email}`);
  return true;
}

cadastro("José",false,"j@gmail.com");
