import { CommonModule, PlatformLocation } from '@angular/common';
import { Component, Output, ViewEncapsulation, inject } from '@angular/core';
import { categories } from '../services/services.component';
import { RouterModule } from '@angular/router';
import { TypeService } from '../../resources/plugin/typeService';
import { NUMERO_WHATSAPP } from '../app.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  categories = categories;
  numero = NUMERO_WHATSAPP;
  typeService: TypeService = inject(TypeService);

  onFooterServiceClicked(cat: string){
    this.typeService.setType(cat);
    window.scrollTo(0, 0);
  }
}
