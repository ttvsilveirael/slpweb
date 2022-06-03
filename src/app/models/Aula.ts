import { Modulo } from "./Modulo";

export class Aula {
    nome: string;
    modulo: Modulo;
    links: [string];
    descricao: string;
    next: string;
    last: string;
    nivel: string;
    requisitos: string;
    twitch: string;
    youtube: string;
    status: string;

    constructor(nome: string, modulo: Modulo, links: [string] = [''],
        descricao: string, next: string = '', last: string = '', nivel: string,
        requisitos: string, twitch: string = '', youtube: string = '', status: string = '') {

        this.nome = nome;
        this.modulo = modulo;
        this.links = links;
        this.descricao = descricao;
        this.next = next;
        this.last = last;
        this.nivel = nivel;
        this.requisitos = requisitos;
        this.twitch = twitch;
        this.youtube = youtube;
        this.status = status;
    }
}