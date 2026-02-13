// --- 12. Shadowing no Escopo de Bloco --- 

// Observe o código abaixo e tente prever o que será impresso no console. 
// Depois, execute e verifique sua resposta.


let idade = 25;

if (true) {
    let idade = 30;
    console.log("Dentro do bloco:", idade); // ?
}

console.log("Fora do bloco:", idade); // ?

// Explicação:

// No código, basicamente a variável "idade" é declarada duas vezes: uma fora do bloco "if" 
// e outra dentro do bloco. A variável dentro do bloco "sombra" é avariável externa, ou seja, ela tem um escopo limitado ao bloco onde foi declarada.