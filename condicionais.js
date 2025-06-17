const idade = 14;
const passouNoTeste = true;

if (idade >= 18 && passouNoTeste === true) {
  console.log("Você tirou a CNH");
} else {
  console.log("Você NÃO tirou a CNH");
}

//Festa branca - mas nao é a do p.diddy
// você acessa a minha festa se a camisa for branca ou a calça for branca, porém o tenis de todos tem que ser branco.

const convidado = {
  camisaBranca: true,
  calcaBranca: false,
  tenisBranco: true,
};

if (
  (convidado.camisaBranca || convidado.calcaBranca) &&
  convidado.tenisBranco
) {
  console.log("Convidado acessou a festa");
} else {
  console.log("Convidado não autorizado");
}

//operador ternário

// let numero = 7;
// let resultado = numero % 2 === 0 ? "Par" : "Ímpar";
// console.log(resultado); // Ímpar

// let idadePessoa = 16;
// let statusPessoa = idadePessoa >= 18 ? "Maior de idade" : "Menor de idade";
// console.log(statusPessoa); // Menor de idade

// let logado = true;
// let mensagem = logado ? "Bem-vindo de volta!" : "Faça login para continuar";
// console.log(mensagem); // Bem-vindo de volta!

// let numero = -10;
// let tipo = numero >= 0 ? "Positivo" : "Negativo";
// console.log(tipo); // Negativo

// let nome = "João";
// let saudacao = nome ? "Olá, " + nome + "!" : "Olá, visitante!";
// console.log(saudacao); // Olá, João!

//exercicios para praticar

// ✅ 1. Saudação personalizada

// Crie uma função chamada saudacao que receba dois parâmetros: nome (string) e hora (número).
// A função deve retornar:
// 	•	“Bom dia, [nome]!” se hora for menor que 12.
// 	•	“Boa tarde, [nome]!” se hora for entre 12 e 18.
// 	•	“Boa noite, [nome]!” se hora for maior que 18.

// ⸻

function saudacao(nome, hora) {
  if (hora < 12) {
    return `Bom dia, ${nome}`;
  } else if (hora > 12 && hora < 18) {
    return `Boa tarde, ${nome}`;
  } else {
    return `Boa noite, ${nome}`;
  }
}

const result1 = saudacao("Rodrigo", 7);
const result2 = saudacao("Mariana", 15);
const result3 = saudacao("Tiago", 22);

console.log(result1, result2, result3);

// ✅ 2. Verificação de maioridade

// Crie uma função verificaIdade que receba um objeto com as propriedades nome (string) e idade (número).
// A função deve imprimir:
// 	•	“[nome] é maior de idade” se idade for 18 ou mais.
// 	•	“[nome] é menor de idade” caso contrário.

// ⸻

const pessoa = {
  nome: "Ana",
  idade: 22,
};

const pessoa2 = {
  nome: "Lucas",
  idade: 10,
};

function verificaIdade(objetoPessoa) {
  if (objetoPessoa.idade >= 18) {
    console.log(`${objetoPessoa.nome} é maior de idade`);
  } else {
    console.log(`${objetoPessoa.nome} é menor de idade`);
  }
}

verificaIdade(pessoa);
verificaIdade(pessoa2);

// ✅ 3. Par ou ímpar em um array

// Crie uma função chamada parOuImpar que receba um array com 5 números.
// A função deve imprimir se cada número é par ou ímpar.

// ⸻

const lista = [1, 4, 8, 11, 20];

function parOuImpar(array) {
  if (array[0] % 2 === 0) {
    console.log("primeiro numero é par");
  } else {
    console.log("primeiro numero é impar");
  }

  if (array[1] % 2 === 0) {
    console.log("segundo numero é par");
  } else {
    console.log("segundo numero é impar");
  }

  if (array[2] % 2 === 0) {
    console.log("terceiro numero é par");
  } else {
    console.log("terceiro numero é impar");
  }

  if (array[3] % 2 === 0) {
    console.log("quarto numero é par");
  } else {
    console.log("quarto numero é impar");
  }

  if (array[4] % 2 === 0) {
    console.log("quinto numero é par");
  } else {
    console.log("quinto numero é impar");
  }
}

parOuImpar(lista);

// ✅ 4. Cadastro simples com objeto

// Crie uma variável usuario que armazene um objeto com nome, email e idade.
// Depois crie uma função exibeUsuario que imprime esses dados em frases completas usando template string.

const usuario = {
  nome: "Carlos",
  email: "carlos@gmail.com",
  idade: 30,
};

function exibeUsuario(user) {
  console.log(`
    O nome do usuário: ${user.nome}
    O email do usuário: ${user.email}
    A idade do usuário: ${user.idade}
    `);
}

exibeUsuario(usuario);

// ⸻

// ✅ 5. Lista de frutas favoritas

// Crie um array com 3 frutas (strings) favoritas.
// Crie uma função gostaDe que receba uma fruta como parâmetro e retorne se ela está ou não na lista.

// (Obs: ainda não use includes ou outros métodos – use apenas if e == com índices fixos).

// ⸻

const frutasFavoritas = ["pera", "morango", "manga"];

function gostaDe(fruta) {
  if (fruta === "banana" || fruta === "laranja" || fruta === "manga") {
    return "Está na lista";
  } else {
    return "Não está na lista";
  }
}

const fruta1 = gostaDe(frutasFavoritas[0]);
const fruta2 = gostaDe(frutasFavoritas[1]);
const fruta3 = gostaDe(frutasFavoritas[2]);

console.log(fruta1, fruta2, fruta3);

// ✅ 6. Comparando tipos primitivos

// Crie uma função comparaValores que recebe dois parâmetros e:
// 	•	Retorna "São iguais" se os valores e tipos forem iguais (===)
// 	•	Retorna "São diferentes" caso contrário

// Chame a função passando, por exemplo, "10" (string) e 10 (number).

// ⸻

function comparaValores(dado1, dado2) {
  if (dado1 === dado2) {
    return "São iguais";
  } else {
    return "São diferentes";
  }
}

const meuResultado = comparaValores("10", 10);

console.log(meuResultado);

// ✅ 7. Verificador de temperatura

// Crie uma função verificaTemperatura que receba um número (temperatura) e:
// 	•	Se for menor que 15, retorne “Muito frio”
// 	•	Se for entre 15 e 25, retorne “Clima agradável”
// 	•	Se for acima de 25, retorne “Muito quente”

// Guarde o resultado em uma variável e exiba no console.

// ⸻

function verificaTemperatura(temperatura) {
  if (temperatura < 15) {
    console.log("Muito frio");
  } else if (temperatura > 15 && temperatura < 25) {
    console.log("Clima agradável");
  } else {
    console.log("Muito quente");
  }
}

verificaTemperatura(10);
verificaTemperatura(22);
verificaTemperatura(34);

// ✅ 8. Cadastro de aluno

// Crie um objeto aluno com nome (string), idade (number), e notas (array com 2 números).
// Crie uma função exibeRelatorio que receba esse objeto e mostre:
// 	•	Nome do aluno
// 	•	Idade
// 	•	Média das duas notas (faça a soma manualmente, sem métodos)

// ⸻

// ✅ 9. Verifica se número está entre os favoritos

// Crie uma função que receba um número e verifique se ele está entre os 3 números favoritos guardados em um array.
// Use if para comparar diretamente com os elementos do array.

// ⸻

// ✅ 10. Cadastro e validação de produto

// Crie um objeto produto com nome (string), preco (number) e emEstoque (boolean).
// Crie uma função verificaDisponibilidade que retorne:
// 	•	“Produto disponível: [nome] - R$[preco]” se emEstoque for true
// 	•	“Produto indisponível” se for false
