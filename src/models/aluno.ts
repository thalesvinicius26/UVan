import { Faculdade } from "./faculdade";

export class Aluno {
    hrEntrada: string;
    hrSaida: string;
    ptEmbarque: string;
    hrEmbarque: string;
    ptDesembarque: string;
    hrDesembarque: string;
    faculdade: Faculdade = new Faculdade();
}
