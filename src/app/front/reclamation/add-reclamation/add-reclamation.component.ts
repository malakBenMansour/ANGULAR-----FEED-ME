import { Component, OnInit } from '@angular/core';
import { ReclamationService } from '../../service/reclamation.service';
import { TypeReclamationService } from '../../service/type-reclamation.service';
import { Router } from '@angular/router';
import { Reclamation } from '../../entity/reclamation';
import { TypeReclamation } from '../../entity/typeReclamation';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnInit {
  showUpdateForm=false;
  reclamation: any={
    idRec:null,
    nomRec:null,
    description:null,
    priority:null,
    numTel:null,
    status:"non_traitée",
    dateCreation:Date.now(),
    typeReclamation:null
  };
  typesReclamation:any[]=[];
idRec!:any;
selectedTypeReclamation!: number;
rec!:Reclamation;

 // selectedDonation!: Donations;
//  selectedAssociation!: Associations;
  showAssociations: {[idRec: number]: boolean} = {};
  selectedAssociation: {[idRec: number]: TypeReclamation} = {};
  selectedDonationId!: number;


constructor(private reclamationService: ReclamationService,  private typeReclamationService: TypeReclamationService,private router: Router) { }

 
ngOnInit(): void {
  this.getTypesReclamation();


}

// getTypesReclamation(): void {
//   this.typeReclamationService.getTypesReclamation().subscribe(types => {
//     this.typesReclamation = types;
//     // this.reclamation.typeReclamation = this.typesReclamation[0];
//   });
// }

// onSubmit(): void {
//   this.reclamationService.addReclamation(this.reclamation).subscribe(rec=> {
//   this.reclamation=rec;
//   this.idRec=rec.idRec;
//   console.log(this.reclamation);
//   console.log(this.idRec);
//   console.log(this.reclamation.typeReclamation.idType)

    
//   });
 
//     this.reclamationService.asseignRecToTypeRec(this.idRec,this.reclamation.typeReclamation.idType).subscribe(() => {
//       console.log('Réclamation ajoutée avec succès');
//       this.router.navigate(['/home'])});
// }
// onSubmit(): void {
//   this.reclamationService.addReclamation(this.reclamation).subscribe(rec=> {
//     this.reclamation=rec;
//     this.idRec=rec.idRec;
//     console.log(this.reclamation);
//     console.log(this.idRec);

//     // Ajouter le typeReclamation sélectionné au reclamation ajouté
//     this.reclamation.typeReclamation = this.typesReclamation.find(type => type.idType === this.reclamation.typeReclamation.idType);

//     this.reclamationService.asseignRecToTypeRec(this.idRec,this.reclamation.typeReclamation.idType).subscribe(() => {
//       console.log('Réclamation ajoutée avec succès');
//       // rediriger l'utilisateur vers la liste des réclamations ou une autre page
//     });

//     this.router.navigate(['/home']);
//   });
//   this.reclamationService.getReclamationList().subscribe((reclamation:Reclamation[])=>{this.reclamation=reclamation;})
//   }
  loadTypeRec(reclamation:Reclamation){
    this.typeReclamationService.getTypesReclamation().subscribe((typeReclamation: TypeReclamation[])=>{    
      //    asso=type
      this.typesReclamation =this.typesReclamation;
      //this.showAssociations[donation.id]=true;
    })
  }
  


  getTypesReclamation() {
    this.typeReclamationService.getTypesReclamation().subscribe(
    (types: TypeReclamation[]) => {
    this.typesReclamation = types;
    },
    (error) => {
    console.log(error);
    }
    );
    }
    
    addReclamation() {
    this.reclamationService.addReclamation(this.reclamation, this.selectedTypeReclamation).subscribe(
    (reclamation: Reclamation) => {
    console.log('Reclamation ajoutée:', reclamation);
    this.showUpdateForm=true;
    //this.router.navigate(['/home']);
    },
    (error) => {
    console.log(error);
    }
    );
    }
    getTypeRec(idType : any){
     
      this.reclamationService.getReclamation(idType).subscribe(data=>
        {
        this.rec=data;
    
      })
   
  
  ;}
    }




