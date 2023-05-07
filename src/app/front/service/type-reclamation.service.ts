import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TypeReclamationService {

    apiUrl = 'http://localhost:8087/';

  constructor(private http: HttpClient) { }

  getTypesReclamation(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+"TypeRec/AfficherAllTypeReclamation");
  }
  deleteTypeReclamation(idType: any): Observable<any> {
    return this.http.delete(this.apiUrl + 'TypeRec/DeleteTypeReclamation/'+ idType );
  }
   
addTypeRec( nom: any, description: any,dateCreation: any): Observable<any> {
  return this.http.post<any>(this.apiUrl + 'TypeRec/AddTypeRec', {
      
      nom,
      description,
      dateCreation
  }, httpOptions);
}
updateTypeRec(id: number, typeRec: any): Observable<any> {
  return this.http.put(this.apiUrl + 'TypeRec/ModifierTypeReclamation/' + id, typeRec, httpOptions);
}
downloadExcel():Observable<Blob>{
  const headers = new HttpHeaders({ 'Content-Type': 'application/vnd.ms-excel' });
  return this.http.get<Blob>(this.apiUrl+ 'TypeRec/export', { headers: headers, responseType: 'blob' as 'json' })
}





}
