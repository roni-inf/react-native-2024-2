"use strict";
const arrow = (username) => {
    let message = "Bem vindo:" + username;
    return message;
};
console.log(arrow("Fulano"));
function cadastro(nome, situacao, email) {
    console.log(`${nome} ${situacao} ${email}`);
    return true;
}
cadastro("José", false, "j@gmail.com");
