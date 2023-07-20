import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  registerPage = '/register';

  public user = '';
  public password = '';
  public isAlert = false;

  constructor(private router: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.isAlert = false;
    this.router.navigate(['/login'], { queryParams: { sidemenu: false } });
  }

  login(): void {
    // this.auth.postSignin('admin@gmail.com','qaz123*').subscribe(resp=>{
    //   console.log(resp);
    // })
    if (this.user == 'admin' && this.password === 'qaz123*') {
      this.router.navigate(['/dashboard'], {
        queryParams: { sidemenu: true, line: 'adulto' },
      });
    } else {
      this.isAlert = true;
    }
  }
}
