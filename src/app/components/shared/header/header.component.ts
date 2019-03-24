import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any = null;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.currentUser = this.apiService.me();
  }

  logout() {
    this.apiService.logout();
    location.reload();
  }
}
