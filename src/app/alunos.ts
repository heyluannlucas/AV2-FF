export class Alunos {
    matricula: string; 
    nome: string;
    idade: number;
    curso: string;
    rendimentoEscolar: {
        [key: string]: number;
    };

    constructor(
        matricula: string, 
        nome: string,
        idade: number,
        curso: string,
        rendimentoEscolar: { [key: string]: number }
    ) {
        this.matricula = matricula;
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.rendimentoEscolar = rendimentoEscolar;
    }
}
