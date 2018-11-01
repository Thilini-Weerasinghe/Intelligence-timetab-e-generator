import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../shared_service/login.service'
//import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginService: any;

  private credential ={'username': '' , 'password': ''};
  private loggedIn = false;

  constructor(private LoginService : LoginService) { }

  onsubmit(){
    this.loginService.sendCredential(this.credential.username , this.credential.password).subscribe(
   res  => {
     console.log(res);
     localStorage.setItem("xAuthToken",res.json().token);
   },

   error=>{
     console.log(error);
   }
    );
  }

  ngOnInit() {
  }

}
// export class LoginComponent {
//   @input() home: HomeComponent;
//   @HostListener('click')
//   click(){
//     this.home.toggle();
//   }
// }
