import { Component, Input, OnInit } from '@angular/core';
import { ReclamationService } from 'src/app/back/service/reclamation.service';
import { TwilioService } from '../service/twilio.service';
import { SmsRequest } from 'src/app/front/entity/sms-request';


@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnInit {
  @Input() max_size: any ;
  lstRec : any
  constructor(private as: ReclamationService,private twilioService:TwilioService) { }

  ngOnInit(): void {
    this.getReclamationList();
    
  }
  
  getReclamationList(){
    this.as.getReclamationList().subscribe(data=>
     { 
      //console.log(data);
       
       
      this.lstRec= data
     } )
    }
    deleteReclamation(idRec : any){
    
        this.as.deleteReclamation(idRec).subscribe(data=>
          {
          this.getReclamationList();})
          
      
  }
  
    downloadExcel() {
    this.as.downloadExcel1().subscribe(
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

  activer(user:any) {
    
        this.as.lockUser(user).subscribe(
          data=>{
            console.log(data);
            this.getReclamationList();
          },
          error=>console.log(error));
        
  }

  smsRequest: SmsRequest = {
    phoneNumber: '',
    message: ''
  };

  sendSms() {
    this.twilioService.sendSms(this.smsRequest).subscribe(() => {
      alert('SMS sent successfully!');
    }, (error) => {
      alert('Failed to send SMS: ' + error.message);
    });
  }



}


