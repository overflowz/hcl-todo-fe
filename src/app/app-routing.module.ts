import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TodosComponent } from './components/todos/todos.component';
import { AuthGuardService } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: 'todos', component: TodosComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
