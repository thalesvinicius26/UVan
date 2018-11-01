import { Veiculo } from "./veiculo";
import { Usuario } from "./usuario";

export class Motorista extends Usuario {
    id: number;
    numeroCnh: string;
    categoriaCNH: string;
    obsCnh: string;
    validaCnh: string;
    regiao: string;
    //faculdade: Array<number>; o serviço será apenas pela região?
    veiculo: Veiculo = new Veiculo(); // O veiculo não está setado no json
}