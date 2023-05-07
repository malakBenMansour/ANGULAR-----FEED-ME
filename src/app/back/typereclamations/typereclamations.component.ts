import { Component, Input, OnInit } from '@angular/core';
import { TypeReclamationService } from '../service/type-reclamation.service';

@Component({
  selector: 'app-typereclamations',
  templateUrl: './typereclamations.component.html',
  styleUrls: ['./typereclamations.component.css']
})
export class TypereclamationsComponent implements OnInit {
  @Input() max_size: any ;
  lstTypeRec : any
  constructor(private as: TypeReclamationService) { }

  ngOnInit(): void {

    
    
    this.getTypeReclamationList();
   
 }

 
 
 
 getTypeReclamationList(){
   this.as.getTypeReclamationList().subscribe(data=>
    { 
     //console.log(data);
      
      
     this.lstTypeRec= data
    } )
   }
   deleteTypeReclamation(idType : any){
   
       this.as.deleteTypeReclamation(idType).subscribe(data=>
         {
         this.getTypeReclamationList();})
     

 }


}
 


