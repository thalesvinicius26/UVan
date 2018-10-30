import { Endereco } from "./endereco";

export class Faculdade {
    id: number;
    nome: string;
    campos: string;
    endereco: Endereco = new Endereco();
}