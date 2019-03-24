import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todo: any = {};
  todos$: BehaviorSubject<any> = new BehaviorSubject({});

  constructor(
    private apiService: ApiService,
  ) {
    this.onTodoDeleted = this.onTodoDeleted.bind(this);
  }

  ngOnInit() {
    this.getTodos()
      .pipe(first())
      .subscribe(_ => this.todos$.next(_));
  }

  getTodos() {
    return this.apiService.getTodos();
  }

  addTodo(todo: any) {
    return this.apiService.createTodo(todo)
      .pipe(first())
      .subscribe(todo => {
        const value = this.todos$.value;
        this.todos$.next({ ...value, todos: [...(value.todos || []), todo], total: value.total + 1 });
      });
  }

  onTodoDeleted(id) {
    const value = this.todos$.value;
    const todos = (value.todos || [])
      .map(x => x.id === id ? null : x)
      .filter(x => x);

    this.todos$.next({
      total: value.total - 1,
      todos,
    });
  }
}
