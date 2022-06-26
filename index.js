import {Cliente} from "./cliente.js";
import { CuentaCorriente } from "./cuentaCorriente.js";


const cliente = new Cliente('Leonardo','123456789','12345');
const cuentaDeLeonardo = new CuentaCorriente(cliente,'1','001');

const cliente2 = new Cliente('Fabian','987654321','54321');
const cuentaDeFabian = new CuentaCorriente(cliente2,'2','002');










