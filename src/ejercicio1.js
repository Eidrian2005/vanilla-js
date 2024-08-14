let contador = {
  valor: 0,
  siguiente: function () {
    this.valor++
    return (`este numero es ${this.valor}`)
  },
};

//export { contador }
console.log(contador.siguiente());
