// Inserte el código aquí

class calculadora {
    constructor(numero1, numero2) {
        this.numero1 = numero1
        this.numero2 = numero2
    }

    sumar(){
        return this.numero1 + this.numero2
    }

    restar(){
        return this.numero1 - this.numero2
    }


    multiplicar(){
       return this.numero1 * this.numero2
    }

    dividir(){
        return this.numero1 / this.numero2
    }
}

export{
    calculadora
}