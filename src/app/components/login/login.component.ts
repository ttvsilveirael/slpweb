import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
declare var google:any;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(public router: Router, private http: HttpClient) { }

  usernameError: Boolean = false;
  passwordError: Boolean = false;
  confirmarSenha: String = '';

  ngOnInit(): void {
  }
  public user: User = new User();

  setconfirmarSenha(event: any) {
    this.confirmarSenha = event;
  }

  doLogin() {
    console.log(google);
    if (this.user.password && this.user.username) {
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['']);
    } else {

    }

  }

  doLogout() {
    localStorage.removeItem('user');
  }
  handleCredentialResponse(ev:any){
    console.log(ev)
  }
}