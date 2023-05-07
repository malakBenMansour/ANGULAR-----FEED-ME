import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../entity/user';
import { Organisation } from '../entity/organisation';
import { OrganisationService } from '../service/organisation.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
    user!: User;

    showAddForm = false;

    private roles: string[] = [];
    isLoggedIn = false;
    showAdminBoard = false;
    showAgentBoard = false;
    showClientBoard=false;
    username?: string;
    user1 =  this.token.getUser();
    admin : any ;
    AGENT : any;
    image:any
  CLIENT:any;
  constructor(private token: TokenStorageService, private router: Router,private userservice:UserService
    
    ,private organisation:OrganisationService
    
    ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.token.getToken();

    if (this.isLoggedIn) {
      const user = this.token.getUser();
      this.roles = user.roles;
      this.image=user.image
      this.admin = this.user1.roles.includes("ROLE_ADMIN");
      this.AGENT = this.user1.roles.includes("AGENT");
      this.CLIENT=this.user1.roles.includes("CLIENT");
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showAgentBoard = this.roles.includes('AGENT');
      this.showClientBoard=this.roles.includes('CLIENT');

      
    }
    this.currentUser = this.token.getUser();
   this.showorganisation(this.token.getUser().id);
  }
  updateEmployee(id: number){
    this.router.navigate(['updateuser', id]);
  }  
  logout(): void {
    this.token.signOut();
    window.location.reload();
    this.router.navigate(['/home']);
  }
org:any;

  showorganisation(id:number)
  {
    id=this.token.getUser().id;
    this.organisation.organisationdeuser(id).subscribe((response)=>{
      this.org=response;
      console.log(response);
    })
    
  }
}
