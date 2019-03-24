import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input()
  private todo: any;

  @Input()
  private onDelete: Function;

  constructor(
    private apiService: ApiService,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
  }

  deleteTodo(id: number) {
    return this.apiService.deleteTodo(id)
      .pipe(first())
      .subscribe(id => {
        this.elementRef.nativeElement.remove();

        if (typeof this.onDelete === 'function') {
          this.onDelete(id);
        }
      });
  }
}
