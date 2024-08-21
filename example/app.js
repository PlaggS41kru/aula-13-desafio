function ContaBancaria (titular, saldo) {
  this.titular = titular
  this.saldo = saldo

  this.depositar = function (valor) {},

  this.retirar = function (valor) {},

  this.consultarSaldo = function () {
    console.log(`O saldo de ${this.titular} é ${this.saldo}`)
  }
};
