import { Usuario } from "./usuario";

export class Aluno extends Usuario {
    hrEntrada: string;
    hrSaida: string;
    ptEmbarque: string;
    hrEmbarque: string;
    ptDesembarque: string;
    hrDesembarque: string;
    motorista: number;
    faculdade: number;
}
