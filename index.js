import {Cliente} from "./Cliente.js";
import { Cuenta } from "./Cuentas/Cuenta.js";
import { CuentaAhorro } from "./Cuentas/CuentaAhorro.js";
import { CuentaCorriente } from "./Cuentas/cuentaCorriente.js";
import { CuentaNomina } from "./Cuentas/cuentaNomina.js";
import { Director } from "./Empleados/Director.js";
import { Empleado } from "./Empleados/Empleado.js";
import { Gerente } from "./Empleados/Gerente.js";


const cliente = new Cliente('Leonardo','123456789','12345');
const cliente2 = new Cliente('Fabian','987654321','54321');

const empleado = new Empleado('Fabian', '209870987',10000);
const gerente = new Gerente('mario sosa', '12345566',12000);
const director = new Director('luigi', '543221', 15000);

console.log(empleado.verBonificacion());
console.log(gerente.verBonificacion());
console.log(director.verBonificacion());
