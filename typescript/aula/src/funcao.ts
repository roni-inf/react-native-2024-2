function login(username: string): boolean {
  let message = "Bem vindo:" + username;
  console.log(message);
  return true;
}

console.log(login("Fulano"));

