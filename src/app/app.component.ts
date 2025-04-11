import { Component } from '@angular/core';
import { ServicesService } from './services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brandambassador';
  respData:any
  allApiRes = {
    "AngelaApi": "https://api2.streamingtv.fun:3479",
  }
constructor(private services:ServicesService){

}
ngOnInit() {
  this.socialLink();
}

  socialLink() {
    this.services.socialLink().subscribe((resp: any) => {
      if(resp){
        this.services.setSocialData(resp?.result[0]); 
        this.respData = resp.result[0];
      }
  
    });
  }
}
