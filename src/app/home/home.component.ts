import { Component, ViewEncapsulation } from '@angular/core';
import { MainBunnerComponent } from './main-bunner/main-bunner.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FAQComponent } from './faq/faq.component';
import { AboutComponent } from './about/about.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainBunnerComponent,
    TestimonialsComponent,
    AboutComponent,
    FAQComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

}
