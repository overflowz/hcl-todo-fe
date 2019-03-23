import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// for the sake of simplicity, put everything in one service.

// TODO: add types.
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  // auth apis

  login(creds: any): Observable<any> {
    return this.httpClient
      .post(`${env.apiUrl}/api/auth/login`, creds);
  }

  logout(): Observable<any> {
    return this.httpClient
      .post(`${env.apiUrl}/api/auth/logout`, null);
  }

  // todo apis

  getTodos(): Observable<any> {
    return this.httpClient
      .get(`${env.apiUrl}/api/todo`);
  }

  createTodo(todo: any): Observable<any> {
    return this.httpClient
      .post(`${env.apiUrl}/api/todo`, todo);
  }

  deleteTodo(id: any): Observable<any> {
    return this.httpClient
      .delete(`${env.apiUrl}/api/todo/${id}`);
  }
}