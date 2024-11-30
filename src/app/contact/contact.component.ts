import { Component, ViewEncapsulation } from '@angular/core';
import { NUMERO_WHATSAPP } from '../app.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent {
  whatsapp_number = NUMERO_WHATSAPP;
}
