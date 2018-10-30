import { Veiculo } from "./veiculo";

export class Motorista {
    id: number;
    num_cnh: string;
    cat_cnh: string;
    obs_cnh: string;
    validade_cnh: string;
    regiao: string;
    faculdade: Array<number>;
    veiculo: Veiculo = new Veiculo();
}