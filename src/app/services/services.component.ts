import { CommonModule } from '@angular/common';
import { Component, DoCheck, ElementRef, Input, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NUMERO_WHATSAPP } from '../app.component';
import { LoadExcelService, ServiceRowType } from '../../resources/plugin/loadExcelService';
import { TypeService } from '../../resources/plugin/typeService';


export const categories: Array<string> = ["Depilazioni", "Manicure", "Massaggi", "Pedicure", "Pulizia Viso"];

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ServiziComponent implements OnInit {

  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  httpClient: HttpClient = inject(HttpClient);
  loadExcelService: LoadExcelService = inject(LoadExcelService);

  whatsapp_number: string = NUMERO_WHATSAPP;
  categories = categories;
  @Input()
  type: string = categories[0];
  servicies: ServiceRowType[] = [];
  typeService: TypeService = inject(TypeService);

  ngOnInit(): void {
    this.loadExcelService.loadfromServiciesXLSX().then((raw_data) => {
      this.servicies = raw_data;
    });
    console.log("init");
  }

  filterByCategory(cat: string): string[] {
    let result: string[] = []
    this.servicies.forEach((s) => { if (s.category == cat) result.push(s.path) });
    return result;
  }

  ngDoCheck(): void {
    if (this.type != this.typeService.getType())
      this.clean();

    this.type = this.typeService.getType();
  }

  clean(): void {
    let activeList: HTMLCollectionOf<Element> = document.getElementsByClassName("active");
    let showList: HTMLCollectionOf<Element> = document.getElementsByClassName("show");

    if (activeList != null && showList != null) {
      activeList.item(0)?.classList.remove("active");
      activeList.item(0)?.classList.remove("active");
      showList.item(1)?.classList.remove("show");
    }
  }
}

