//arrays - criando

const frutas = ["banana", "morango", "laranja"];

const listNumeros = new Array(1, 2, 3, 4, 5, 6);

console.log(listNumeros);

// acessando os dados no array

console.log(frutas[2]);
console.log(listNumeros[0]);

//métodos de arrays

//push() -> Adiciona um item no final do array

listNumeros.push(7);
listNumeros.push(8);

console.log(listNumeros);

//pop() -> Remove o ultimo item do array

frutas.pop(); //remove "laranja"
console.log(frutas);

listNumeros.pop(); // remove 8

console.log(listNumeros);

//unshift() -> Adiciona o item no inicio do array

listNumeros.unshift(0);

console.log(listNumeros);

frutas.unshift("manga");

console.log(frutas);

//shift() -> remove o primeiro item do array

frutas.shift(); // remove "manga"
console.log(frutas);

listNumeros.shift(); // remove 0
console.log(listNumeros);

//splice() -> Adiciona, remove ou substitui elementos em uma posição específica

const letras = ["A", "B", "C", "D", "E", "F"];

letras.splice(2, 2, "X", "Z");

console.log(letras);

//slice() -> Retorna uma cópia da parte do array sem modificar o original

const novasLetras = letras.slice(2, 5);
console.log(novasLetras);
console.log(letras);

//map() -> Cria um novo array aplicando uma função pra cada elemento

const novosNumeros = listNumeros.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  }

  return item;
});

console.log(novosNumeros);
console.log(listNumeros);

//filter() -> Retorna um novo array apenas com os elementos que atendem a uma condição

const maioresQueCinco = novosNumeros.filter((item) => {
  return item > 5;
});

console.log(maioresQueCinco);

//forEach() -> itera sobre os elementos do array

novosNumeros.forEach((item) => {
  console.log(item);
});
