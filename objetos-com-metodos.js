const carro = {
  marca: "Honda",
  modelo: "Civic EXL",
  ano: 2019,
  cor: "branco",
  bancoDeCouro: true,
  cambio: "cvt",
  motor: "2.0 aspirado",
  extras: [
    "Ar condicionado digital",
    "Direção Elétrica",
    "Regulagem de altura do volante",
    "Multimidia",
  ],

  ligarCarro: function () {
    console.log("O civic está ligado");
  },

  desligarCarro: function () {
    console.log("O civic está desligado");
  },

  ligarSom(musica) {
    console.log(`O som está ligado na musica ${musica}`);
  },
};

console.log(carro.modelo);

carro.ligarCarro();
carro.ligarSom("Bonde do tigrão");
carro.desligarCarro();

const produto = {
  nomeProduto: "arroz",
  preco: 5,
};

const caixa = {
  totalNoCaixa: 300,

  venda(produto, quantidade) {
    const totalDaVenda = produto.preco * quantidade;
    return totalDaVenda;
  },

  entradaNoCaixa(valorDavenda) {
    this.totalNoCaixa = this.totalNoCaixa + valorDavenda;
  },
};

const resultVenda = caixa.venda(produto, 10);
const resultVenda2 = caixa.venda(
  {
    nomeProduto: "café",
    preco: 22,
  },
  10
);

caixa.entradaNoCaixa(resultVenda);
caixa.entradaNoCaixa(resultVenda2);

console.log(`O valor atual do caixa é: ${caixa.totalNoCaixa}`);
