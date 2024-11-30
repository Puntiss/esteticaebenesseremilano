import { Component, ViewEncapsulation } from '@angular/core';
import { NUMERO_WHATSAPP } from '../../app.component';


@Component({
  selector: 'main-bunner',
  standalone: true,
  imports: [],
  templateUrl: './main-bunner.component.html',
  styleUrl: './main-bunner.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MainBunnerComponent {
  whatsapp_number :string = NUMERO_WHATSAPP;
}
