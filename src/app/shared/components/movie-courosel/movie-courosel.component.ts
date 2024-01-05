import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { IVideoContent } from '../../model/vedio-content.interface';

@Component({
  selector: 'app-movie-courosel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-courosel.component.html',
  styleUrl: './movie-courosel.component.css'
})
export class MovieCouroselComponent implements OnInit, AfterViewInit {
  
  @Input() vedioContents: IVideoContent[] = [];
  @Input() title!: string;
  
  @ViewChild('swiperContainer') swiperContainer!: ElementRef
  constructor() { }

  ngAfterViewInit(): void {
    this.initSwiper();
  }

  ngOnInit() {
    
  }

  private initSwiper() {
    return new Swiper(this.swiperContainer.nativeElement, {
      slidesPerView: 3,
      slidesPerGroup: 2,
      centeredSlides: true,
      loop: true,
      breakpoints: {
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 5,
          centeredSlides: true,
        },
        900: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 5,
          centeredSlides: true,
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1500: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 5,
          centeredSlides: false,
        },
        1800: {
          slidesPerView: 5,
          slidesPerGroup: 6,
          spaceBetween: 5,
          centeredSlides: false,
        }
      }
    })
  }


}
