import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FaqRowType, LoadExcelService } from '../../../resources/plugin/loadExcelService';

export class FAQ {

  constructor(question: string, answer: string) {
    this.question = question;
    this.answer = answer;
  }

  question: string;
  answer: string;
}

@Component({
  selector: 'faq',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FAQComponent implements OnInit{

  loadExcelService = inject(LoadExcelService);
  faqs: FaqRowType[] = [];

  ngOnInit() {

    this.loadExcelService.loadfromFaqXLSX().then((raw_data) => {
      this.faqs = raw_data;
    });
    
  }

}
