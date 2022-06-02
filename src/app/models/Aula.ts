export class Aula {
    nome: String;
    modulo: String;
    links: [String];
    descricao: String;
    next: String;
    last: String;
    nivel: String;
    requisitos: String;
    twitch: String;
    youtube: String;
    status: String;

    constructor(nome: String, modulo: String, links: [String] = [''],
        descricao: String, next: String = '', last: String = '', nivel: String,
        requisitos: String, twitch: String = '', youtube: String = '', status: String = '') {

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