import { Component, OnInit } from '@angular/core';
import { Organisation } from '../../entity/organisation';
import { OrganisationService } from '../../service/organisation.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../service/token-storage.service';

@Component({
  selector: 'app-listclientorg',
  templateUrl: './listclientorg.component.html',
  styleUrls: ['./listclientorg.component.css']
})
export class ListclientorgComponent implements OnInit {
  employees: Organisation[] = [];
  name:any;
  p:number=1;
  constructor(private employeeService:OrganisationService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
  
    // this.employees = this.employeeService.getBoites();
    this.employeeService.getOrganisations().subscribe((response)=>{
      this.employees=response;
    })
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
