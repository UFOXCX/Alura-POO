export class Cuenta 
{   
    #cliente;
    #saldo;

    
    
    constructor(cliente , numero , agencia, saldo) {


        if(this.constructor == Cuenta){
            throw new Error('no se deben instanciar objetos de clase Cuenta');   
                   
        }

        this.numero = numero;
        this.agencia = agencia;
        this.#cliente = cliente;
        this.#saldo = saldo;

    }

    set cliente(valor){
        if(valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

        depositoEnCuenta(valor){
            if(valor > 0)
                this.#saldo += valor;
            return this.#saldo;
        }
        
        retirarDeCuenta(valor){
            //metodo abstracto
            throw new Error('Debe implementar el metodo retirar de cuenta de su clase');
            
        }

        _retirarDeCuenta(valor , comision){
            valor = valor * (1+comision/100);
            if(valor > 0)
                if (valor <= this.#saldo)
                    this.#saldo -= valor;
            return this.#saldo;
        } 
    
        verSaldo(){
    
            return this.#saldo;
        }
    
        transferirParaCuenta(valor,cuentaDestino){
            this.retirarDeCuenta(valor);
            cuentaDestino.depositoEnCuenta(valor);
    
        }

        prueba(){

            console.log('metodo padre');
        }
            
}