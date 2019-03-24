import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any = {};
  lastError: string = '';

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
  }

  login(user) {
    const success = user => {
      this.apiService.me(user);
      location.reload();
    };

    const failure = _ => {
      this.lastError = 'hardcoded: an unknown error occuired';
    };

    this.apiService.login(user)
      // pipe(first) to avoid memory leaks.
      .pipe(first())
      .subscribe(success, failure);
  }
}
