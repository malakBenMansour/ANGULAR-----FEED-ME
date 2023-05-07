import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class TypeReclamationService {
  baseUrl:string='http://localhost:8087/TypeRec'

  constructor(private http: HttpClient) { }
  getTypeReclamationList(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl+'/AfficherAllTypeReclamation');
  }
  deleteTypeReclamation(idType: any): Observable<any> {
    return this.http.delete(this.baseUrl + '/DeleteTypeReclamation/'+ idType );
  }
  //addTypeReclamation(nom:any,description:any,dateCreation: any,): Observable<any> {
   // return this.http.post(this.baseUrl + '/AddTypeRec/',{nom,description,dateCreation} );
 // }
}
