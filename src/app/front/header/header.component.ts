import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  isShown: boolean = false ; // hidden by default
  toggleShow() {
    this.isShown = ! this.isShown;

  }
/////
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showAgentBoard = false;
  showClientBoard=false;
  username?: string;
  user =  this.tokenStorageService.getUser();
  admin : any ;
  AGENT : any;
CLIENT:any;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.admin = this.user.roles.includes("ROLE_ADMIN");

      this.AGENT = this.user.roles.includes("AGENT");
      this.CLIENT=this.user.roles.includes("CLIENT");
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showAgentBoard = this.roles.includes('AGENT');
      this.showClientBoard=this.roles.includes('CLIENT');

      this.username = user.username;
    }
  }

logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.router.navigate(['/home']);
  }

}