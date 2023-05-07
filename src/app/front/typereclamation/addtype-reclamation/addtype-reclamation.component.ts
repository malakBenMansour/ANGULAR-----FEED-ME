import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TypeReclamationService } from '../../service/type-reclamation.service';
import { ReclamationService } from '../../service/reclamation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
declare interface TableData {
  headerRow: string[];
  //dataRows: string[][F];
  
}
@Component({
  selector: 'app-addtype-reclamation',
  templateUrl: './addtype-reclamation.component.html',
  styleUrls: ['./addtype-reclamation.component.css']
})
export class AddtypeReclamationComponent implements OnInit {

  public tableData1!: TableData;
  p : number=1;
 
    nom : any;
    description : any ;
    dateCreation : any ;

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
  constructor(private typeRec: TypeReclamationService,  private Rec: ReclamationService,
    private route: ActivatedRoute,private router: Router
    ) { }

  ngOnInit() {
    this.tableData1 = {
        headerRow: [ 'date_creation', 'description', 'nom'],
        
    };
    this.getListType();
    
}

getListType(){
  this.typeRec.getTypesReclamation().subscribe(data => {
    this.typereclamation=data;
   
    });
}
onSubmit(){
  this.typeRec.addTypeRec(this.nom,this.description,this.dateCreation).subscribe(
    response=>{
      console.log(response);
      
      this.nom='';
      this.description='';
      this.dateCreation='';
      
    },
    error=>{console.log(error)}
  )
  this. refresh();
}
Search()
{
  if(this.nom=="")
  {
    this.getListType();
  }
  else 
  {
    this.typereclamation=this.typereclamation.filter((res: { nom: string; })=>{
      return res.nom.toLocaleLowerCase().match(this.nom.toLocaleLowerCase());
    })
  }
}





onUpdateTypeRec(type : any) {
  this.selectedTypeRec = type;
  this.showUpdateForm = true;
  return this.selectedTypeRec;

}
ongetTypeRec( idType : any) {

    this.router.navigate(['articleblog', idType]);
 
  
}
updateTypeRec(selectedTypeRec : any ) {
 
this.typeRec.updateTypeRec(this.selectedTypeRec.idType,this.selectedTypeRec).subscribe()
this. refresh();
}

  refresh(): void {
    window.location.reload();
  }
  deleteTypeRec(idType : any){
     
    this.typeRec.deleteTypeReclamation(idType).subscribe(data=>
      {
      this.getListType();})
 

}

  key:string='titre';
  reverse:boolean=false;
  
  sort(key:string)
  {
  this.key=key;
  this.reverse=!this.reverse;
  } 

  downloadExcel() {
    this.typeRec.downloadExcel().subscribe(
      data => {
        const blob = new Blob([data], { type: 'application/vnd.ms-excel' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'data.xlsx';
        link.click();
        window.URL.revokeObjectURL(url);
        link.remove();
      },
      error => console.error(error)
    );
  }
}