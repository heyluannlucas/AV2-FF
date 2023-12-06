import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../aluno.service';
import { Alunos } from '../alunos';

@Component({
  selector: 'app-dados-alunos',
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css'],
})
export class DadosAlunosComponent implements OnInit {
  alunos: Alunos[] = [];

  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {
    this.alunoService.getAlunos().subscribe((data) => {
      this.alunos = data
        .map(aluno => new Alunos(aluno.matricula, aluno.nome, aluno.idade, aluno.curso, aluno.rendimentoEscolar))
        .sort((a, b) => a.nome.localeCompare(b.nome)); 
    });
  }

  calcularMediaGlobal(rendimentoEscolar: { [key: string]: number }): number {
    const disciplinas = Object.keys(rendimentoEscolar);
    const totalNotas = disciplinas.reduce((sum, disciplina) => sum + rendimentoEscolar[disciplina], 0);
    return disciplinas.length > 0 ? totalNotas / disciplinas.length : 0;
  }
}
