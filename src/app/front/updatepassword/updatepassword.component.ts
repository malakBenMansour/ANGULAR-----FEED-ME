import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-updatepassword',
  templateUrl: './updatepassword.component.html',
  styleUrls: ['./updatepassword.component.css']
})
export class UpdatepasswordComponent implements OnInit {

  form: any = {};
  msg = '';
  email: string;
  password: string;
  confirmPassword: string;
  isSuccessful = false;
  constructor(private userservice: UserService) {
    this.email= "";
this.password= "";
this.confirmPassword= "";
   }

  ngOnInit(): void {
  }
    updatePassword() {
    this.email = this.form.emailUser;
    this.password = this.form.password;
    this.confirmPassword = this.form.confirmPasswordUser;
    this.userservice.updatePassword(this.email, this.password).subscribe(
      data => {
        console.log(data);
        this.msg = 'password updated succefully';
        this.isSuccessful = true;
        this.form = '';
      },
      error => {
        console.log(error);
        this.msg = 'Password not matched';
      })
  }


}
