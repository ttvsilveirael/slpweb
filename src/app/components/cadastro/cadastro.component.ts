import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class Cadastrocomponent implements OnInit {
  constructor(public router: Router) { }
  usernameError: Boolean = false;
  passwordError: Boolean = false;
  confirmarSenha: String = '';

  ngOnInit(): void {
    this.user = new User('', '');
  }
  public user: User | undefined;


  setUsername(event: any) {
    this.user?.setUsername(event);
  }

  setPassword(event: any) {
    this.user?.setPassword(event);
  }

  setconfirmarSenha(event: any) {
    this.confirmarSenha = event;
  }

  doLogin() {
    if (this.confirmarSenha == this.user?.password) {

    }
    this.usernameError = false;
    this.passwordError = false;

    if (this.user == null) {
      console.log("User not detected.");
      this.usernameError = true;
      return;
    }
    if (this.user?.username == null || this.user.username == '') {
      console.log("Type a user");
      this.usernameError = true;
      return;
    }
    if (this.user?.password == null || this.user.password == '') {
      console.log("Type a password");
      this.passwordError = true;
      return;
    }
    localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['']);

  }

  doLogout() {
    localStorage.removeItem('user');
  }
}