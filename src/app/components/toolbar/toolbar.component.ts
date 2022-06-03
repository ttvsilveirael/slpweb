import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']

})
export class ToolbarComponent {
  constructor(private router: Router) { }
  showmenu = true;
  doLogout() {
    localStorage.clear();
  }

  get usuario() {
    let ret = localStorage.getItem('user');
    let user: User = JSON.parse(ret as string);
    return user.username;
  }
}

