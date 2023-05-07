import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organisation } from 'src/app/front/entity/organisation';
import { OrganisationService } from 'src/app/front/service/organisation.service';

@Component({
  selector: 'app-organisationlist',
  templateUrl: './organisationlist.component.html',
  styleUrls: ['./organisationlist.component.css']
})
export class OrganisationlistComponent implements OnInit {
  employees: Organisation[] = [];
  name:any;
  p:number=1;
  constructor(private employeeService: OrganisationService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
  
    // this.employees = this.employeeService.getBoites();
    this.employeeService.getOrganisations().subscribe((response)=>{
      this.employees=response;
    })
    }

    deleteEmployee(id: number) {
      this.employeeService.delete(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
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
          return res.nom && res.nom.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
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

}
