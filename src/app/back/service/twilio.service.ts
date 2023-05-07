import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SmsRequest } from 'src/app/front/entity/sms-request';
@Injectable({
  providedIn: 'root'
})
export class TwilioService {



  private apiUrl = 'http://localhost:8087/api/sms';

  constructor(private http: HttpClient) { }

  sendSms(smsRequest: SmsRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, smsRequest);
  }
}
