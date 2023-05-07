import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organisation } from '../entity/organisation';
import { Typeorganisation } from '../entity/typeorganisation';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class OrganisationService {
  readonly API_URL = 'http://localhost:8090/organisation';
  constructor(private httpClient: HttpClient) { }
  

  
  public getOrganisations(): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/getall`)
  }
  public add(user :Organisation):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8090/organisation/ajouter",user)
  
  }

  /*addOrg( adresse: any,description: any, nom: any,typeorganisation:any[]): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8090/organisation/ajouter" , {
    
       adresse,description,nom,typeorganisation
    }, httpOptions);
  }*/

  /*addOrg(adresse: string, description: string, nom: string,typeorganisation:any): Observable<any> {
    return this.httpClient.post<Organisation>("http://localhost:8090/organisation/ajouter", {
      adresse,
      description,
      nom,
      typeorganisation
    }, httpOptions);
  }*/

  /*addOrg(adresse: string, description: string, nom: string, typeorganisation: string[]): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8090/organisation/ajouter", {
      adresse,
      description,
      nom,
      typeorganisation
    }, httpOptions);
  }*/

  addOrg(adresse: string, description: string, nom: string, typeOrganisation: string): Observable<any> {
    return this.httpClient.post<any>("http://localhost:8090/organisation/ajouter", {
      adresse,
      description,
      nom,
      typeOrganisation
    }, httpOptions);
  }
  private baseUrl = 'http://localhost:8090';
  addOrganisation(organisation: Organisation): Observable<Organisation> {
    const url = `${this.baseUrl}/organisation/ajouter`;
    return this.httpClient.post<Organisation>
    (url, organisation,httpOptions);
  }

  delete(idorg: any){
    return this.httpClient.delete(`${this.API_URL}/delete/${idorg}`)
  }

  public update(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.API_URL}/update/${id}`, value);
  }


  addOrganisationimage(fct : any,image :File):Observable<any>{
    const formData = new FormData();
  console.log(fct)
  formData.append('oragnisation', JSON.stringify(fct));
  formData.append('image', image, image.name);
    return this.httpClient.post(this.baseUrl+"/organisation/ajouter",formData);
  }


   create(annonce: Organisation,imageAnnonce: string): Observable<HttpResponse<any>> {
    annonce.image=imageAnnonce;
    return this.httpClient
      .post<any>(`${this.baseUrl}/organisation/ajouter`, annonce, { observe: 'response' });
  }


  // organisation user
  assignUserToOrganization(orgId: Organisation, iduser: number): Observable<any> {
    const url = `${this.API_URL}/adduser/${iduser}`;
    return this.httpClient.put(url,orgId, httpOptions);
  }

  organisationdeuser(iduser:number)
  {
    return this.httpClient.get(`${this.API_URL}/getorg/`+iduser);
  }
}
