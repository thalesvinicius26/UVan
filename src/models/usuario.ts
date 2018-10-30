import { Endereco } from "./endereco";
import { Aluno } from "./aluno";
import { Motorista } from "./motorista";

export class Usuario {
    id: number;
    tipo: string;
    email: string;
    senha: string;
    nome: string;
    genero: string;
    dtNascimento: string;
    documento: string;
    telefone: string;
    aluno: Aluno = new Aluno();
    motorista: Motorista = new Motorista();
    endereco: Endereco = new Endereco();
}