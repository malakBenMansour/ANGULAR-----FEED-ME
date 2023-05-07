import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Erole } from 'src/app/front/entity/erole';
import { Role } from 'src/app/front/entity/role';
import { User } from 'src/app/front/entity/user';
import { UserService } from 'src/app/front/service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  employees: User[] = [];
  name:any;
  p:number=1;



  constructor(private employeeService: UserService,
    private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.reloadData();
    
  }
  reloadData() {
  
    // this.employees = this.employeeService.getBoites();
    this.employeeService.getAllUsers().subscribe((response)=>{
      this.employees=response;
    })
    }
  deleteEmployee(id: number) {
    this.employeeService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  activer(user:any) {
    this.employeeService.lockUser(user)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


  exportSocietePdf(){
    this.employeeService.exportPdfSociete().subscribe(x=>{
    const blob =new Blob([x],{type:'application/pdf'});
   /* if (window.navigator && window.navigator.msSaveOrOpenBlob)
    {
     window.navigator.msSaveOrOpenBlob(blob);
     return;
    }*/
const data=window.URL.createObjectURL(blob);
const link=document.createElement('a');
link.href=data;
link.download='societes.pdf';
link.dispatchEvent(new MouseEvent('click',{bubbles:true,cancelable:true,view:window}));
setTimeout(function(){

window.URL.revokeObjectURL(data);
link.remove();

},100);

    });

  }


    Search()
{
  if(this.name=="")
  {
    this.reloadData();
  }
  else 
  {
    this.employees = this.employees.filter(res => {
      return res.name && res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
    });
  }
}
key:string='nom';
reverse:boolean=false;

sort(key:string)
{
this.key=key;
this.reverse=!this.reverse;
} 



// User to Role

roles: Role[] = [];
users: User[]=[];

showRoles: {[donationId: number]: boolean} = {};
  selectedRole: {
    [donationId: number]: Role} = {};
  selectedUserId!: number;

/*
loadUsers(){
  this.employeeService.getAllUsers().subscribe((users:User[])=>{this.users=users;})
}
/*/
onDonationClick(donationId: number) {
  this.showRoles[donationId] = true;
  this.selectedUserId = donationId;
  
    console.log('selectedRole:', this.selectedRole);
  }
 

assignAssociation(userid: number) {
  const associationId = this.selectedRole[userid].id;
  console.log('selectedRole:', this.selectedRole);
  this.employeeService.assignAssociationToDonation(userid, associationId)
    .subscribe((donation: User) => {
      console.log('User updated:', donation);
    });
}







loadRoles(user:User){
  this.employeeService.getRoles().subscribe((data)=>{
     this.roles=data;
     console.log(data);
  });
}

/// part 2 : assign 


}
