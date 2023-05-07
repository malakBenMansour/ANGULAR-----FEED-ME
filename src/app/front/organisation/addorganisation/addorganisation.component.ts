import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../../service/organisation.service';
import { Organisation } from '../../entity/organisation';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../service/token-storage.service';

@Component({
  selector: 'app-addorganisation',
  templateUrl: './addorganisation.component.html',
  styleUrls: ['./addorganisation.component.css']
})
export class AddorganisationComponent implements OnInit {

  constructor(private organisationService:OrganisationService,
    private router:Router,private tk:TokenStorageService) { 

    }

 

  /*types = ["CAFE", "HOTEL", "RESTAURANT"];
  nom!: string;
  adresse!: string;
  description!: string;
  typeorganisation:string[] = [];
  
  ngOnInit(): void {
    this.types;
  }
  
  onSubmit() {
    this.organisationService.addOrg(this.adresse, this.description, this.nom,this.typeorganisation).subscribe(
      response => {
        console.log(response); 
      },
      error => { console.log(error); }
    );
  }
  */
  /*ngOnInit(): void {
  }
   
  
 /* onSubmit(){
    this.org = {
      nom: this.nom,
      adresse: this.adresse,
      description: this.description,
      typeorganisation: this.typeorganisation
    };
    this.organisationService.add(this.org).subscribe(
      response=>{
        console.log(response);
        
      },
      error=>{console.log(error)}
    )
    
  }*/

/*
  onSubmit(): void {
    const { adresse, description, nom} = this.form;
    const selectedRoles = this.selectedRoles;
    
    this.organisationService.addOrg(adresse,description, nom,selectedRoles).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
       

      
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }

  */
  org: Organisation = new Organisation();
  imagePath!: File;
  previewImage:any;

  ngOnInit(): void {
  }
    
  
  //types = ['CAFE','HOTEL','RESTAURANT'];
  // nom!: string;
  // adresse!: string;
  // description!: string;
  // selectedType!: string;
  typeorganisation : string []=['CAFE','HOTEL','RESTAURANT'];
  
  // onSubmit() {
  //   this.selectedType=this.typeorganisation;
  //   this.organisationService.addOrg(this.adresse, this.description, this.nom, this.selectedType).subscribe(
  //     response => {
  //       console.log(response); 
  //     },
  //     error => { console.log(error); }
  //   );
  // }
  imageAnnonce: string = "";

  onImageUpload(event?: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log("image organisation :", reader);
      this.imageAnnonce = reader.result!.toString();
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  onFileInput(org:any) {
    if (org.target.files.length > 0) {
      this.previewImage = org.target.files[0];
      console.log(this.previewImage)
    }
  }
  onSubmit(form:any){
  
    const image = this. imageAnnonce;
  
   /* this.organisationService.addOrganisationimage(form.value,image).subscribe(res=>console.log(res))
    this.router.navigate(['/']).then(() => {
    //  location.reload();
    });
  */
    this.organisationService.create(form.value,image).subscribe(res=>console.log(res))
    const userId=this.tk.getUser().id;
    console.log(userId);
    this.organisationService.assignUserToOrganization(form.value, userId).subscribe(
      
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );


    this.router.navigate(['/']).then(() => {
    //  location.reload();
    });
  
  }

  
}
  


