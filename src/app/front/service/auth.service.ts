import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entity/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiServerUrl = 'http://localhost:8090/api-auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.post(apiServerUrl + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string,name: string,prenom: string,address: string,tel:string,role:string[],datenaissance: any): Observable<any> {
    return this.http.post<any>(apiServerUrl + 'signup', {
      username,
      email,
      password,
      name,prenom,address,tel,
      role,datenaissance
    }, httpOptions);
  }
 public addUser(user :User):Observable<any>{
    return this.http.post<any>("http://localhost:8090/api-auth/signup",user, httpOptions)
  
  }
// service :
confirmUserAccount(token: string) {
  const url = `${apiServerUrl}/confirm-account?token=${token}`;
  return this.http.get<any>(url);
}

}
