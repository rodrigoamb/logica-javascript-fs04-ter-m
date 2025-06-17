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

var numero = 7;
var resultado = numero % 2 === 0 ? "Par" : "Ímpar";
console.log(resultado); // Ímpar

var idadePessoa = 16;
var statusPessoa = idadePessoa >= 18 ? "Maior de idade" : "Menor de idade";
console.log(statusPessoa); // Menor de idade

var logado = true;
var mensagem = logado ? "Bem-vindo de volta!" : "Faça login para continuar";
console.log(mensagem); // Bem-vindo de volta!

var numero = -10;
var tipo = numero >= 0 ? "Positivo" : "Negativo";
console.log(tipo); // Negativo

var nome = "João";
var saudacao = nome ? "Olá, " + nome + "!" : "Olá, visitante!";
console.log(saudacao); // Olá, João!

//exercicios para praticar

// ✅ 1. Saudação personalizada

// Crie uma função chamada saudacao que receba dois parâmetros: nome (string) e hora (número).
// A função deve retornar:
// 	•	“Bom dia, [nome]!” se hora for menor que 12.
// 	•	“Boa tarde, [nome]!” se hora for entre 12 e 18.
// 	•	“Boa noite, [nome]!” se hora for maior que 18.

// ⸻

// ✅ 2. Verificação de maioridade

// Crie uma função verificaIdade que receba um objeto com as propriedades nome (string) e idade (número).
// A função deve imprimir:
// 	•	“[nome] é maior de idade” se idade for 18 ou mais.
// 	•	“[nome] é menor de idade” caso contrário.

// ⸻

// ✅ 3. Par ou ímpar em um array

// Crie uma função chamada parOuImpar que receba um array com 5 números.
// A função deve imprimir se cada número é par ou ímpar.

// ⸻

// ✅ 4. Cadastro simples com objeto

// Crie uma variável usuario que armazene um objeto com nome, email e idade.
// Depois crie uma função exibeUsuario que imprime esses dados em frases completas usando template string.

// ⸻

// ✅ 5. Lista de frutas favoritas

// Crie um array com 3 frutas (strings) favoritas.
// Crie uma função gostaDe que receba uma fruta como parâmetro e retorne se ela está ou não na lista.

// (Obs: ainda não use includes ou outros métodos – use apenas if e == com índices fixos).

// ⸻

// ✅ 6. Comparando tipos primitivos

// Crie uma função comparaValores que recebe dois parâmetros e:
// 	•	Retorna "São iguais" se os valores e tipos forem iguais (===)
// 	•	Retorna "São diferentes" caso contrário

// Chame a função passando, por exemplo, "10" (string) e 10 (number).

// ⸻

// ✅ 7. Verificador de temperatura

// Crie uma função verificaTemperatura que receba um número (temperatura) e:
// 	•	Se for menor que 15, retorne “Muito frio”
// 	•	Se for entre 15 e 25, retorne “Clima agradável”
// 	•	Se for acima de 25, retorne “Muito quente”

// Guarde o resultado em uma variável e exiba no console.

// ⸻

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
