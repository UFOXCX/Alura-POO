import { Cliente } from "./cliente.js";

export class CuentaCorriente 
{
    
    #cliente;
    numero;
    agencia;
    #saldo;
    static cantidadCuentas = 0;

    set cliente(valor){
        if(valor instanceof Cliente)
            this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente,numero,agencia){

        this.#cliente = cliente;
        this.numero = numero;
        this. #saldo = 0;
        this.agencia = agencia; 
        CuentaCorriente.cantidadCuentas++;
    }


    depositoEnCuenta(valor){
        if(valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }
    
    retirarDeCuenta(valor){
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
        
}
