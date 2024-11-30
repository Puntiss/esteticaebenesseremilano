import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';


export const NUMERO_WHATSAPP: string = "393397796131";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: '../resources/css/style.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  showPromotion = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.showPromotion = true;
    }, 1000);
  }

  title = 'esteticaebenesseremilano';
}



