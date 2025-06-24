//repeticao com for

// console.log(`número: ${0}`);
// console.log(`número: ${1}`);
// console.log(`número: ${2}`);
// console.log(`número: ${3}`);
// console.log(`número: ${4}`);
// console.log(`número: ${5}`);

for (let i = 0; i <= 5; i++) {
  console.log(`número: ${i}`);
}

console.log("fim do loop");

const marcasDeCarro = ["Honda", "BYD", "Toyota", "Jeep"];

const itensDoArray = marcasDeCarro.length;

const frase = "Rodrigo Medeiros";

console.log(itensDoArray);

console.log(frase.length);

// console.log(marcasDeCarro[0]);
// console.log(marcasDeCarro[1]);
// console.log(marcasDeCarro[2]);
// console.log(marcasDeCarro[3]);

for (let i = 0; i < marcasDeCarro.length; i++) {
  console.log(marcasDeCarro[i]);
}

//Exercicio 01 : Em um array de frutas

const frutas = ["banana", "morango", "laranja", "uva"];

//troque laranja por abacate utilizando o for.

for (let i = 0; i < frutas.length; i++) {
  if (frutas[i] === "laranja") {
    frutas[i] = "abacate";
  }
}

console.log(frutas);

const tenis = [
  {
    marca: "Nike",
    modelo: "Air Max",
    cor: "preto",
    tamanho: [42, 43, 44],
    preco: 499.99,
    estoque: 10,
  },
  {
    marca: "Adidas",
    modelo: "Ultraboost",
    cor: "branco",
    tamanho: [40, 41, 42],
    preco: 599.99,
    estoque: 5,
  },
  {
    marca: "Puma",
    modelo: "RS-X",
    cor: "azul",
    tamanho: [39, 40, 41],
    preco: 399.99,
    estoque: 8,
  },
  {
    marca: "Reebok",
    modelo: "Classic",
    cor: "cinza",
    tamanho: [38, 39, 40],
    preco: 299.99,
    estoque: 12,
  },
];

// ocorreu uma mudança no estoque no qual o estoque de cada um dos tenis foi reduzido em 1
// e o preço do puma entrou em promoção de 399.99 para 299.99
// e o preço do reebok aumentou de 299.99 para 399.99
// o tamanho do nike foi alterado para [42, 43, 44, 45]

for (let i = 0; i < tenis.length; i++) {
  tenis[i].estoque = tenis[i].estoque - 1;

  if (tenis[i].marca === "Puma") {
    tenis[i].preco = 299.99;
  }

  if (tenis[i].marca === "Reebok") {
    tenis[i].preco = 399.99;
  }

  if (tenis[i].marca === "Nike") {
    // const arrTamanhosNike = tenis[i].tamanho;
    // tenis[i].tamanho[tenis[i].tamanho.length] = 45;
    tenis[i].tamanho.push(45);
  }
}

console.log(tenis);

//Ex1 - Crie uma função chamada mostrarPares que recebe dois parâmetros: inicio e fim. A função deve exibir no console todos os números pares entre inicio e fim.

function mostrarPares(inicio, fim) {
  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

mostrarPares(1, 10);

//Ex2 - Crie uma função chamada contarMaioresQue10 que recebe um array de números como parâmetro e retorna quantos desses números são maiores que 10.

//Ex3 - Crie uma função chamada mostrarTabuada que recebe um número como parâmetro e imprime a tabuada desse número de 1 a 10.

//Ex4 - Crie uma função somarImpares que recebe dois números (inicio, fim) e retorna a soma de todos os números ímpares dentro desse intervalo.

// Ex5 - Crie uma função chamada verificarVotacao que recebe um array de idades. Para cada idade, a função deve imprimir se a pessoa “Pode votar” (idade ≥ 16) ou “Não pode votar”.
