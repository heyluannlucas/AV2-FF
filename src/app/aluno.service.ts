import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alunos } from './alunos';

@Injectable({
  providedIn: 'root',
})
export class AlunoService {
  private apiUrl = 'http://localhost:3000/alunos';

  constructor(private http: HttpClient) {}

  getAlunos(): Observable<Alunos[]> {
    return this.http.get<Alunos[]>(this.apiUrl);
  }
}
