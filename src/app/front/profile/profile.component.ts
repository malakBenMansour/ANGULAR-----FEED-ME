import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../service/token-storage.service';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  user:any;
  constructor(private token: TokenStorageService, private router: Router,private userservice:UserService) { }

  ngOnInit(): void {
    
    this.currentUser = this.token.getUser();
  }
  updateEmployee(id: number){
    this.router.navigate(['updateuser', id]);
  }  
  logout(): void {
    this.token.signOut();
    window.location.reload();
    this.router.navigate(['/home']);
  }

}
