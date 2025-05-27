// O que são dados?
// Dados são informações, que fazem algum sentindo.

// O que é algorítmo?
// Algoritimo é um conjunto de passo a passo lógico que executa algo.

//tipos de dados primitivos em JS

//string aspas duplas
"MEC discute uso de inteligência artificial em escolas, diz Camilo Santana";
"tênis air max";

//string com aspas simples
"Ministro da Educação ressalta que tecnologia deve ser empregada para melhorar a qualidade da aprendizagem, não diminui-la";

//string com crase
`Escrito 
por Nícolas Paulino`;

//isso é uma string
("52789");

// number

12; //int
200 - //int
  25; //int
85.49; // float
299.9; //float
0.25; //float

//boolean
true;
false;

// null
null;

// undefined
undefined;

//console.log()
console.log("Olá mundo");

//variáveis

// duas formas de criar variáveis (let ou const)

//O que são palavras reservadas?

let primeiroNome = "Rodrigo";

let tituloDaMateria =
  "MEC discute uso de inteligência artificial em escolas, diz Camilo Santana";

console.log(tituloDaMateria);

console.log(primeiroNome);

primeiroNome = "Diego";

console.log(primeiroNome);

//const é quando criamos uma variável e não podemos trocar o valor dele
const endereco = "Av. Bezerra de Menezes";

//endereco = "Av. João Pessoa";

let altura = 1.87;

//arrays e objetos

//array (lista)

let pessoa = ["Rodrigo", "Medeiros", 35, 1.87, "programador", true];

let fruta = ["banana", "uva", "morango", "abacaxi"];

console.log(pessoa);

let minhaAltura = pessoa[3];

console.log(minhaAltura);

let frutaEscolhida = fruta[3];

console.log(frutaEscolhida);

let meuMorango = fruta[2];

fruta[2] = "laranja";

console.log(fruta);

console.log(meuMorango);

fruta[4] = meuMorango;

console.log(fruta);

//objetos

let pessoa2 = {
  nome: "Rodrigo",
  sobrenome: "Medeiros",
  idade: 35,
  profissao: "programador",
  solteiro: true,
};

const pegandoProfissao = pessoa2.profissao;
const pegandoNome = pessoa2.nome;
const pegandoIdade = pessoa2.idade;

console.log(pessoa2.profissao);
console.log(pegandoProfissao, pegandoNome, pegandoIdade);

const novaProfissao = "professor";
pessoa2.profissao = novaProfissao;

console.log(pessoa2);

delete pessoa2.solteiro;

console.log(pessoa2);

let marcaArCondicionado;

console.log(marcaArCondicionado);

//atividade de sala:

//ex1: Crie 5 variáveis usando let , um para cada tipo de dado primitivo (string, number, boolean, undefined, null) e mostre no console

//ex2: Crie 1 variável com const e tente alterar o valor e mostre no console

//ex3: Pegue uma das variáveis criadas no ex1 e troque o seu valor e mostre no console

// ex4: Crie um array que recebe dados variados e mostre no console

// ex5: Crie um objeto carro e crie propriedades para esse objeto e mostre no console

// ex6: Adicione um item no final do array e mostre no console

// ex7: Acesse uma propriedade qualquer do objeto carro e mostre no console
