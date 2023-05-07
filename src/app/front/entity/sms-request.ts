export class SmsRequest {
    phoneNumber: string;
    message: string;
  
    constructor(phoneNumber: string, message: string) {
      this.phoneNumber = phoneNumber;
      this.message = message;
    }
  }