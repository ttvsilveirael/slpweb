import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';

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
    if (this.user.password && this.user.username) {
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['']);
    }else{
      
    }

    // this.http.get('http://localhost:3000').subscribe(
    //   {
    //     next: data => {
    //       console.log(data)
    //     },
    //     error: err => {
    //       console.log(err)
    //     },
    //     complete: () => {
    //       console.log("Complete")
    //     }
    //   }
    // );

    // this.http.get('http://localhost:3000').subscribe({
    //   next: data => {
    //     console.log(data);
    //     let u = (data as any)[0];
    //     this.user = new User(u.name, '***');
    //     localStorage.setItem('user', JSON.stringify(this.user));
    //     this.router.navigate(['']);
    //   },
    //   error: error => {
    //     console.log(error);
    //     console.error('There was an error!', error);
    //   }
    // });

  }

  doLogout() {
    localStorage.removeItem('user');
  }
}