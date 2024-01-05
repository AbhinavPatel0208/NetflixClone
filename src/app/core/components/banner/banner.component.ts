import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnChanges {


  @Input({ required: true }) bannerTittle = '';
  @Input() bannerOverview = '';
  @Input() Key = 'sGomQQMqV1Q';

  private sanitizer = inject(DomSanitizer)
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.Key}?autoplay=1&mute=1&loop=1&controls=0`)

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['key']){
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.Key}?autoplay=1&mute=1&loop=1&controls=0`);
    }
  }


}
