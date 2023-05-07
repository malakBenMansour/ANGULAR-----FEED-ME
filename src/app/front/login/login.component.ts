import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';

import { SocialService } from '../service/social.service';
import { TokenDto } from '../entity/token-dto';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
 
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  accessToken: any;
  socialUser?: SocialUser;
  userLogged?: SocialUser;
  currentUser: any;
  isLogin?: boolean;
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router
 ,private socialService: SocialAuthService,
    private social: SocialService
    ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.socialService.authState.subscribe(
      data => {
        this.isLogin = (data !=null);
      }
    );
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        console.log(this.tokenStorage.getUser().roles);
        if(this.tokenStorage.getUser().roles=='ADMIN')
        {
          this.router.navigate(["/dashboard"]);
        }
        else
        {
          this.router.navigate(["profile"]);
        }
        //this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
  //  window.location.reload();
    this.router.navigate(['/profile']);
  }
 signInWithFB(): void {
    this.socialService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        this.social.loginWithFacebook(data.authToken).subscribe(
          res => {
            console.log(res);
            
            this.tokenStorage.saveUser(data);
            this.currentUser = data;
           
          }
        );
       
        this.router.navigate(["/profile"]);

      }
    );
  }
  signInWithGoogle(): void {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data=> {
        console.log(data);
        this.social.loginWithGoogle(data.idToken).subscribe(
          res =>{
            console.log(res);
            this.tokenStorage.saveUser(data);
            this.currentUser=data;
          }
        );
      
        this.router.navigate(["/profile"]);
      }

    );
  }
  signOut(): void {
    this.socialService.signOut();
  }

}
