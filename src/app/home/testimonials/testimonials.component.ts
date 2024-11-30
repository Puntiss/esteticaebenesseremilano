import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadExcelService, TestimonialsRowType } from '../../../resources/plugin/loadExcelService';
import { ActivatedRoute } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'testimonials',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule 
  ],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
  encapsulation: ViewEncapsulation.None
})
export class TestimonialsComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute)
  testimonials: TestimonialsRowType[] = [/*{ nome: "nome", cognome: "cognome", fonte: "fonte", stelle: 5, testimonianza: "testimonianza", titolo: "titolo" }*/];
  loadExcelService = inject(LoadExcelService);
  ngOnInit() {
    
    this.loadExcelService.loadfromTestimonialsXLSX().then((raw_data)=>{
      this.testimonials = raw_data;
    })
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 2
      },
      1600: {
        items: 3
      }
    },
    nav: false,
    autoplay: true
  }
}


