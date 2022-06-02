export class Perfil {
    nome: String;
    sobrenome: String;
    endereco: String;
    dataNascimento: Date;
    email: String;
    image: Blob;

    constructor(nome: String, sobrenome: String,
        endereco: String, dataNascimento: Date,
        email: String, image: Blob) {

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.endereco = endereco;
        this.dataNascimento = dataNascimento;
        this.email = email;
        this.image = image;
    }

}