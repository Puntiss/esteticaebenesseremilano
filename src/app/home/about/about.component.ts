import { Component } from '@angular/core';
import { NUMERO_WHATSAPP } from '../../app.component';

@Component({
  selector: 'about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  whatsapp_number :string = NUMERO_WHATSAPP;
}
