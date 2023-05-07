import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  selectedRoles: string[] = [];
  form: any = {
    username: null,
    email: null,
    password: null,
    address: null,
    tel: null,
    name: null,
    prenom: null,
    birth: null,
    selectedRoles:[],
    organisationId: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  user = new User();
  msg = '';
  currentUser: any;
  accessToken: any;
  alert: boolean = false;
  isLoggedIn = false;
  isLoginFailed = false;
  
   isLogged?: boolean;
  isLogin?: boolean;

 /* user_roles: any = [
		{name:'AGENT', value:'AGENT', selected: false},
		{name:'admin', value:'ROLE_ADMIN', selected: false},
		{name:'CLIENT', value:'CLIENT', selected: false},
	]
*/
user_roles: any = [
  { name:'AGENT', value:'agent', selected: false },
  //{ name:'ADMIN', value:'ROLE_ADMIN', selected: false },
  { name:'CLIENT', value:'client', selected: false },
]

  constructor(private authService: AuthService,private http: HttpClient) { }

  ngOnInit(): void {
  }
  onChangeCategory(event: any, role: any) {
		this.selectedRoles.push(role.value);
	}

  /*onSubmit(): void {
    const { username, email, password, address, tel, name, prenom, selectedRoles } = this.form;
  
    this.authService.register(username, email, password, name, prenom, address, tel, selectedRoles).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }*/

  onSubmit(): void {
    const { username, email, password, address, tel, name, prenom ,organisationId} = this.form;
    const selectedRoles = this.selectedRoles;
    
    this.authService.register(username, email, password, name, prenom, address, tel, selectedRoles,organisationId).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  
    
  
  
  

}
