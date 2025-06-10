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

function multiplicaDoisNumeros(num1, num2) {
  console.log("O resultado da multiplicação:", num1 * num2);
}

multiplicaDoisNumeros(3, 5);
multiplicaDoisNumeros(5, 10);

//ex2 - Crie uma função que recebe seu nome, idade e altura e no console mostra sua breve descrição.

function minhaApresentacao(nome, idade, altura) {
  console.log(
    `Oi, meu nome é ${nome}, tenho ${idade} anos e uma altura de ${altura} metros.`
  );
}

minhaApresentacao("Rodrigo", 35, 1.87);

//ex3 - Crie uma função que recebe como parametro um array de números no parametro da funcao e dentro da funcao ele soma os dois primeiros índices desse array, mostre no console o resultado.

const arrayNumeros = [4, 10, 30, 50];

function somandoOsDoisPrimeirosIndices(meuArrayDeNumeros) {
  console.log(
    "A soma dos primeiros indices:",
    meuArrayDeNumeros[0] + meuArrayDeNumeros[1]
  );
}

somandoOsDoisPrimeirosIndices(arrayNumeros);
somandoOsDoisPrimeirosIndices([22, 33, 55, 77]);
somandoOsDoisPrimeirosIndices([4, 10, 30, 50]);

//ex4 - Crie uma função que recebe como parâmetro um objeto carro, esse objeto carro possui propriedades com características desse carro. Dentro da função, terá uma breve descrição para venda desse carro.

const carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2021,
  cor: "branco",
};

function anuncioDeVendaCarro(carro) {
  console.log(`
      Vende-se Carro modelo ${carro.modelo} da marca ${carro.marca}, ano ${carro.ano} da cor ${carro.cor}
    `);
}

anuncioDeVendaCarro(carro);

// Atenção: Além de CRIAR a função, não esqueça de EXECUTAR ela!

// operadores de comparação

const comparacao1 = 10 > 5; //maior que
const comparacao2 = 5 < 2; // menor que
const comparacao3 = 5 <= 10; //menor igual
const comparacao4 = 2 >= 1; //maior igual
const comparacao5 = 10 == "10"; //igual
const comparacao6 = 10 === "10"; //igual
const comparacao7 = 12 !== 12; //diferente

console.log(comparacao1);
console.log(comparacao2);
console.log(comparacao3);
console.log(comparacao4);
console.log(comparacao5);
console.log(comparacao6);
console.log(comparacao7);

//escopo global e escopo de bloco e return

const numero1 = 20;
const numero2 = 30;

function subtraindoNumeros(num1, num2) {
  console.log("numero1 global: ", numero1);
  console.log("numero2 global: ", numero2);

  const numero3 = 40;
  const numero4 = 99;

  console.log("numero3: ", numero3);

  console.log("O resultado da subtração:", num1 - num2);

  return numero4;
}

const pegandoMeuValor = subtraindoNumeros(10, 3);

console.log("meu dado retornado:", pegandoMeuValor);

// escrever função anonima

const esseSouEu = function (nome) {
  console.log(`Meu nome é ${nome}`);
};

const info = "Rodrigo";

esseSouEu(info);

esseSouEu("Medeiros");

//crie uma funcao anonima que recebe uma largura e profundidade de um terreno e essa funcao deve calcular a área do terreno. Mostre o calculo para 3 terrenos diferentes

const calculoTerreno = function (largura, profundidade) {
  console.log(
    `O resultado da área é: ${largura * profundidade} metros quadrados `
  );
};

const calculoTerreno2 = function (largura, profundidade) {
  const result = largura * profundidade;
  console.log(`O resultado da área é: ${result} metros quadrados `);
};

const calculoTerreno3 = function (largura, profundidade) {
  return largura * profundidade;
};

//executando a primeira
calculoTerreno(5, 30);

//executando a segunda
calculoTerreno2(10, 45);

const meuCalculoArea = calculoTerreno3(12, 50);

console.log(`O resultado da área do terreno é: ${meuCalculoArea}`);

// a terceira forma de escrever função (arrow function)

const calculoAreaTriangulo = (base, altura) => {
  return (base * altura) / 2;
};

const resultadoAreaTriang = calculoAreaTriangulo(30, 20);

console.log(`a área do triangulo é: ${resultadoAreaTriang} metros quadrados`);
