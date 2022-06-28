import { Cliente } from "../Cliente.js";
import { Cuenta } from "./Cuenta.js";

export class CuentaCorriente extends Cuenta {

    static cantidadCuentas = 0;

    

    constructor(cliente,numero,agencia){

        super(cliente,numero,agencia,0);
        CuentaCorriente.cantidadCuentas++;
    }
    prueba(){
        super.prueba();
        console.log('metodo hijo');
    }

    
        
}
