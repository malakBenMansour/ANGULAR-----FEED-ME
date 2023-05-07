import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Reclamation } from '../../entity/reclamation';
import { ReclamationService } from '../../service/reclamation.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
declare interface TableData {
  headerRow: string[];
  //dataRows: string[][];
  
}
@Component({
  selector: 'app-addreclamation',
  templateUrl: './addreclamation.component.html',
  styleUrls: ['./addreclamation.component.css']
})

export class AddreclamationComponent implements OnInit {

  public tableData1!: TableData;
  p : number=1;
 idRec:any ;
    nomRec : any;
    description : any ;
    dateCreation : any ;
    status:any ; 
    priority:any ;
    numTel : any ;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
reclamation !: any[] ;
  selectedType: string[] = [];
  typereclamation!:any[]
  selectedTypeRec: any;
  idType = this.route.snapshot.paramMap.get('id'); // initialisation ici
  showUpdateForm: boolean = false;
  showAddForm = false;
  newTypeRec: any = {};
  typeRecl!:any;

  constructor(  private Rec: ReclamationService,
    private route: ActivatedRoute,private router: Router
    ) { }


    ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'date_creation', 'description', 'nom'],
          
      };
      this.getListRec();
      
  }
  
  getListRec(){
    this.Rec.getReclamationList().subscribe(data => {
      this.typereclamation=data;
     
      });
  }
  onSubmit(){
    this.Rec.addReclamation(this.idType,this.idRec ).subscribe(
      response=>{
        console.log(response);
        
        this.nomRec='';
        this.description='';
        this.dateCreation='';
        this.status='';
        this.priority='';
        this.description='';
    
        
      },
      error=>{console.log(error)}
    )
    // this. refresh();
  }
  Search()
  {
    if(this.nomRec=="")
    {
      this.getListRec();
    }
    else 
    {
      this.reclamation=this.reclamation.filter((res: { nomRec: string; })=>{
        return res.nomRec.toLocaleLowerCase().match(this.nomRec.toLocaleLowerCase());
      })
    }
  }
  
  
  
  
  
  // onUpdateTypeRec(type : any) {
  //   this.selectedTypeRec = type;
  //   this.showUpdateForm = true;
  //   return this.selectedTypeRec;
  
  // }
  ongetRec( idType : any) {
  
      this.router.navigate(['articleblog', idType]);
   
    
  }
  // updateTypeRec(selectedTypeRec : any ) {
   
  // this.Rec.updateTypeRec(this.selectedTypeRec.idType,this.selectedTypeRec).subscribe()
  // this. refresh();
  // }
  
    // refresh(): void {
    //   window.location.reload();
    // }
    deleteRec(idType : any){
       
      this.Rec.deleteReclamation(idType).subscribe(data=>
        {
        this.getListRec();})
   
  
  }
  
    key:string='titre';
    reverse:boolean=false;
    
    sort(key:string)
    {
    this.key=key;
    this.reverse=!this.reverse;
    } 
  
    activer(user:any) {
    
      this.Rec.lockUser(user).subscribe(
        data=>{
          console.log(data);
          this.getListRec();
        },
        error=>console.log(error));
      
}
// getTypesReclamation() {
//   this.Rec.getReclamationList().subscribe(
//   (types: Reclamation[]) => {
//   this.reclamation = types;
//   },
//   (error) => {
//   console.log(error);
//   }
//   );
//   }
  
//   addReclamation() {
//   this.Rec.addReclamation(this.reclamation, this.selectedType).subscribe(
//   (reclamation: Reclamation) => {
//   console.log('Reclamation ajoutée:', reclamation);
//   this.showUpdateForm=true;
//   //this.router.navigate(['/home']);
//   },
//   (error) => {
//   console.log(error);
//   }
//   );
//   }
    
  }