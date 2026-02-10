// --- 9. Escopo de Variáveis ---

// Observe o código abaixo e explique o que será impresso no console. Em seguida, execute o código e verifique sua resposta.


 function testeEscopo() {
     var a = 10;
     if (true) {
         let b = 20;
         console.log(a); // ?
         console.log(b); // ?
     }
     console.log(a); // ?
     console.log(b); // ?
 }
testeEscopo();


// Explicação:

// O códio acima, basicamente, 
// mostra a diferença entre o escopo de variáveis declaradas com "var" e "let".