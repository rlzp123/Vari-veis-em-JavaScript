// --- 10. Variáveis Globais e Locais -- 

// Crie uma variável global chamada "mensagem" 

// e outra variável local dentro de uma função chamada "exibirMensagem()".

// Tente acessar ambas dentro e fora da função. O que acontece?


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


// Isso causará um erro, pois "mensagemLocal" é uma variável local 
// e não pode ser acessada fora da função.