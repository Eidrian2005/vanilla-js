class Contador {
  constructor(valor){
    this.valor=valor;
  }
  mostrarValor(){
    this.valor++;
    return (`este valor es ${this.valor}`)
  }
}

const miValor = new Contador(0);

console.log(miValor.mostrarValor());


//export { instancia }