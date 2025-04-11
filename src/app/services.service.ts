import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  constructor(private http: HttpClient) {
   
}
  
  private socialDataSource = new BehaviorSubject<any>(null); // Initialize with null or default value
  socialData$ = this.socialDataSource?.asObservable(); // Observable to subscribe to

  setSocialData(data: any): void {
    this.socialDataSource?.next(data); // Update the data
  }
  socialLink() {
    return this.http.get(`https://api2.streamingtv.fun:3479/api/getSocialLink`)
}
}
