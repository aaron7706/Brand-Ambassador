import { Component } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-brading-page-one',
  templateUrl: './brading-page-one.component.html',
  styleUrls: ['./brading-page-one.component.scss']
})
export class BradingPageOneComponent {
  videoElement: HTMLVideoElement | undefined;
  onVideoLoad(video: HTMLVideoElement): void {
    this.videoElement = video;
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver(): void {
    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.5 // trigger when 50% of the video is visible
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.videoElement?.play();
        } else {
          this.videoElement?.pause();
        }
      });
    }, options);
    observer.observe(this.videoElement as Element);
  }
  
}
