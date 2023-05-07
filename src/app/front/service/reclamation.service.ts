import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  downloadExcel() {
    throw new Error('Method not implemented.');
  }

  apiUrl = 'http://localhost:8087/';

  constructor(private http: HttpClient) { }

  addReclamation(reclamation: any,idType:any): Observable<any> {
    return this.http.post<any>(this.apiUrl+"reclamation/addRec/"+idType, reclamation);
  }
  

  asseignRecToTypeRec(idRec:any, idType:any):Observable<any>{
    return this.http.put<any>(this.apiUrl+"reclamation/asseignRecToTypeRec/"+idRec+"/"+idType,"");
  }
  deleteReclamation(idRec: any): Observable<any> {
    return this.http.delete(this.apiUrl + 'reclamation/DeleteRec/'+ idRec );
  }
  getReclamationList(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'reclamation/AfficherAllRec');
  }

  getAllOrderedByNomASC(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'reclamation/getAllOrderedByNomASC');
  }
  
 
  public lockUser(reclamation: any):Observable<any>{
    return this.http.put(this.apiUrl+'reclamation/activer',reclamation);
}

  downloadExcel1():Observable<Blob>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/vnd.ms-excel' });
    return this.http.get<Blob>(this.apiUrl+ 'reclamation/export', { headers: headers, responseType: 'blob' as 'json' })
  }
  getReclamation(idRec: any): Observable<any> {
    return this.http.get(this.apiUrl + 'reclamation/AfficherById/'+ idRec );
  } 
  
}
