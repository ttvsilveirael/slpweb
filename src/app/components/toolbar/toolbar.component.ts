import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
}

