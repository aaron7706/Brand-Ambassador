import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  respData:any
constructor(private services:ServicesService){
  this.services.socialData$.subscribe((data) => {
    this.respData = data;
    // console.log(this.respData); // Use the data as needed
  });
}
}
