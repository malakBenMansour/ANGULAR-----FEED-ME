import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token!: string
  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];

  uploadedImage!: File;
  dbImage: any;
  postResponse: any;
  successResponse!: string;
  image: any;
  idImage:any;
  idUser:any;
  readonly API_URL = 'http://localhost:8090/user';
  constructor(private httpClient: HttpClient) { }
  public getAllUsers(): Observable<any>{
    return this.httpClient.get(`${this.API_URL}/allUsers`)
  }

  editUser(user: any){
    return this.httpClient.put(`${this.API_URL}/modifUser/`,user)
  }
  deleteUser(idUser: any){
    return this.httpClient.delete(`${this.API_URL}/deleteUser/${idUser}`)
  }
  
  public addUser(user :User):Observable<any>{
    return this.httpClient.post<any>("http://localhost:8090/user/addUser",user)
  
  }
  public lockUser(user: any):Observable<any>{
    return this.httpClient.put(`${this.API_URL}/activateUser/`,user)
  
  } 
  updatePassword(email: string, password: string) {
    return this.httpClient.put('http://localhost:8090/user/updatepassword/' + email + '/' + password , { responseType: 'text' });
  }
  forgotPassword(email: string) {
    return this.httpClient.get('http://localhost:8090/user/sendme/' + email);
  }
  public getUser(id: number): Observable<any> {
    return this.httpClient.get(`${this.API_URL}/find/${id}`);
  }
  public updateUser(id: number, value: any): Observable<Object> {
    return this.httpClient.put(`${this.API_URL}/update/${id}`, value);
  }
}
