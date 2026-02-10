// --- 11. Shadowing com "var" e "let" --- 

// O que será impresso no console ao executar o código abaixo? Explique o motivo.



var nome = "Ana";

function mostrarNome() {
    let nome = "Carlos";
    console.log(nome); // ?
}

mostrarNome();
console.log(nome); // ?


// Explicação:

// O código basicamente mostra o conceito de "shadowing" (sombreamento) em JavaScript. 

// A variável "nome" declarada dentro da função "mostrarNome" 
// é diferente da variável "nome" declarada fora da função. 