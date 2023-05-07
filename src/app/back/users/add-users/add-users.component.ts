import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/front/entity/user';
import { UserService } from 'src/app/front/service/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  user: User = new User();
  submitted = false;
  public registerForm!: FormGroup;
  user_roles: any = [
    { name:'AGENT', value:'agent', selected: false },
    //{ name:'ADMIN', value:'ROLE_ADMIN', selected: false },
    { name:'CLIENT', value:'client', selected: false },
    { name:'ADMIN', value:'admin', selected: false },
  ]
  selectedRoles: string[] = [];
  telForm!: FormGroup;
  constructor(private userservice:UserService, private router: Router) { }

  ngOnInit() : void {
    this.registerForm = new FormGroup({
      name: new FormControl(),
      prenom: new FormControl(),
      address: new FormControl(),
      password: new FormControl(),
      tel: new FormControl(),
      email: new FormControl(),
      username: new FormControl()

    });
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.userservice.addUser(this.user).subscribe(data => {
      console.log(data)
      this.user = new User();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit(registerForm: NgForm) {
    this.submitted = true;
    console.log(registerForm.form);
    console.log('valeurs: ', JSON.stringify(registerForm.value))
    this.save();    
  }

  gotoList() {
    this.router.navigate(['']);
  }

  

}
