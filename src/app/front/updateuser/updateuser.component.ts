import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {
  id!: number;
  employee!: User;
  public editUser!: User;
  form: any = {};
  isSuccessful=false
  constructor(private route: ActivatedRoute,private router: Router,
    private userservice: UserService,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.employee = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.userservice.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }
  public onUpdateUser(): void {
    this.userservice.updateUser(this.id, this.employee).subscribe(
     
      data => {
        console.log(data);
        this.employee = new User();
        this.token.saveUser(data);
        this.isSuccessful = true;
        this.reloadPage();
      }, error => console.log(error));
  }

  onSubmit() {
    this.onUpdateUser();    
  }

  

  reloadPage(): void {
    //  window.location.reload();
      this.router.navigate(['']);
    }
}
