import { Lieu } from "./lieu";

export class Objet
{ 
    id_utilisateur!: number;
    nom!: string;
    type!: string;
    lieu!: Lieu
    precision!: string;
    date_creation!: string;
    description!: string;
    etat!: string;
}