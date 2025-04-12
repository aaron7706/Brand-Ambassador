import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  respData:any
constructor(private services:ServicesService){
  this.services.socialData$.subscribe((data) => {
    this.respData = data;
    // console.log(this.respData); // Use the data as needed
  });
}
}
