import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// for the sake of simplicity, put everything in one service.

// TODO: add types.
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(
    private httpClient: HttpClient,
  ) { }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Authorization': JSON.stringify(this.me()),
      }),
    };
  }

  // auth apis

  login(creds: any): Observable<any> {
    return this.httpClient
      .post(`${env.apiUrl}/api/auth/login`, creds);
  }

  logout(): void {
    localStorage.removeItem('current_user');
  }

  // auth helpers

  me(user?: any) {
    try {
      if (user) localStorage.setItem('current_user', JSON.stringify(user));
      return JSON.parse(localStorage.getItem('current_user'));
    } catch (err) {
      return null;
    }
  }

  // todo apis

  getTodos(): Observable<any> {
    return this.httpClient
      .get(`${env.apiUrl}/api/todo`, this.getHttpOptions());
  }

  createTodo(todo: any): Observable<any> {
    return this.httpClient
      .post(`${env.apiUrl}/api/todo`, todo, this.getHttpOptions());
  }

  deleteTodo(id: any): Observable<any> {
    return this.httpClient
      .delete(`${env.apiUrl}/api/todo/${id}`, this.getHttpOptions());
  }
}
