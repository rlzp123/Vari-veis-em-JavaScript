// --- 5. Strict Mode ---

// Ative o "strict" mode no início de um script 
// e tente declarar uma variável sem a palavra-chave "var", "let" ou "const". 


"use strict";

x = 10; 


// explicação:
// O "strict mode" é uma funcionalidade do JavaScript que ajuda a 
// identificar erros comuns e a escrever código mais seguro. 

// Quando o "strict mode" está ativado, 
// tentar declarar uma variável sem usar `var`, `let` ou `const` 
// resultará em um erro de referência.

// Isso ocorre por conta, que no "strict mode", 
// o JavaScript não permite a criação de variáveis globais acidentalmente.