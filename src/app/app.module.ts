import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './components/todos/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    HeaderComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
