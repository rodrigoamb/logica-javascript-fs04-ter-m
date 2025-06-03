// funcoes

//sintaxe da funcao

//declaracao de funcao
function apresentacao() {
  console.log("Olá, prazer! Meu nome é Rodrigo");
}

apresentacao();
apresentacao();
apresentacao();
apresentacao();

//funcao com parametros

function novaApresentacao() {
  const meuNome = "Lucas";
  console.log(`Olá, prazer! Meu nome é ${meuNome}`);
}

function maisUmaApresentacao(nome, idade) {
  console.log(
    `Olá, prazer! Meu nome é ${nome} e tenho ${idade} anos de idade.`
  );
}

maisUmaApresentacao("Marcos", 30);
maisUmaApresentacao("Maria", 22);
maisUmaApresentacao("Ana", 17);

function somaDoisNumeros(num1, num2) {
  console.log("A soma dos números é: ", num1 + num2);
}

somaDoisNumeros(20, 30);
somaDoisNumeros(2, 5.5);
somaDoisNumeros(300, 35);

//operações matemáticas na programação

const resultadoSoma = 200 + 20; //somando números
const resultadoSubtracao = 100 - 30; //subtraindo números
const resultadoMultiplicacao = 3 * 30; //multiplicação de números
const resultadoDivisao = 40 / 4; //resultado da divisao
const resultadoRestoDaDivisao = 30 % 4; //(mod) resultado do resto da divisao

const resultadoDaOperacao = ((300 + 40) * (20 + 10)) / 2;

console.log(resultadoSoma);
console.log(resultadoSubtracao);
console.log(resultadoMultiplicacao);
console.log(resultadoRestoDaDivisao);
console.log(resultadoDaOperacao);

//exercicios

//ex1 - crie uma função que recebe 2 parâmetros e multiplique os dois parametros, mostre o resultado no console.

//ex2 - Crie uma função que recebe seu nome, idade e altura e no console mostra sua breve descrição.

//ex3 - Crie uma função que recebe como parametro um array de números no parametro da funcao e dentro da funcao ele soma os dois primeiros índices desse array, mostre no console o resultado.

//ex4 - Crie uma função que recebe como parâmetro um objeto carro, esse objeto carro possui propriedades com características desse carro. Dentro da função, terá uma breve descrição para venda desse carro.

// Atenção: Além de CRIAR a função, não esqueça de EXECUTAR ela!
