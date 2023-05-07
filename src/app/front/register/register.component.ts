import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';

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

  constructor(private router: Router,private authService: AuthService,private http: HttpClient,private tokenStorage: TokenStorageService) { }

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
    const { username, email, password, address, tel, name, prenom ,datenaissance} = this.form;
    const selectedRoles = this.selectedRoles;
    
    this.authService.register(username, email, password, name, prenom, address, tel, selectedRoles,datenaissance).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.tokenStorage.saveToken(data);
        this.tokenStorage.saveUser(data);
        

        if(this.tokenStorage.getUser().roles=='ADMIN')
        {
          this.router.navigate(["/dashboard"]);
        }
        else
        {
          this.router.navigate(["/profile"]);
          console.log(this.tokenStorage.getUser());
        }
        //this.reloadPage();
      
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  
    
  
  
  

}

