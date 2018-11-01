import { Endereco } from "./endereco";

export class Usuario {
    id: number;
    tipo: string;
    eMail: string;
    senha: string;
    nome: string;
    sexo: string;
    dataNascimento: string;
    documento: string;
    telefone: string;
    endereco: Endereco = new Endereco();
}