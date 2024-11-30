import { Injectable, inject } from '@angular/core';
import { Observable, from } from 'rxjs';
import * as XLSX from 'xlsx';
import { categories } from '../../app/services/services.component';

@Injectable({ providedIn: 'root' })
export class LoadExcelService {

    async loadfromTestimonialsXLSX(): Promise<TestimonialsRowType[]> {
        const response = await fetch("../../resources/file/testimonials.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        let rows: TestimonialsRowType[] = [];
        data.shift();
        data.forEach((row) => {
            var rowTpe: TestimonialsRowType = {
                nome: row[0],
                cognome: row[1],
                fonte: row[2],
                stelle: row[3],
                titolo: row[4],
                testimonianza: row[5]
            };

            if (rowTpe.testimonianza != undefined) {
                //console.log(rowTpe);
                rows.push(rowTpe);
            }

        })
        return rows;
    }

    async loadfromFaqXLSX(): Promise<FaqRowType[]> {
        const response = await fetch("../../resources/file/faq.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        let rows: FaqRowType[] = [];
        data.shift();
        data.forEach((row) => {
            var rowTpe: FaqRowType = {
                domanda: row[0],
                risposta: row[1]
            };

            if (rowTpe.domanda != undefined) {
                //console.log(rowTpe);
                rows.push(rowTpe);
            }

        })
        return rows;
    }

    async loadfromServiciesXLSX(): Promise<ServiceRowType[]> {
        const response = await fetch("../../resources/file/servicies.xlsx");
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer);
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const data: any[][] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
        let rows: ServiceRowType[] = [];
        data.shift();
        data.forEach((row) => {
            var rowTpe: ServiceRowType = {
                path: row[0],
                category: row[1]
            };

            if (rowTpe.category != undefined && categories.includes(rowTpe.category)) {
                //console.log(rowTpe);
                rows.push(rowTpe);
            }

        })
        return rows;
    }
}

export interface TestimonialsRowType {
    nome: string;
    cognome: string;
    fonte: string; //GOOGLE_MAPS, TRUSTPILOT
    stelle: number;
    titolo: string;
    testimonianza: string;
}

export interface FaqRowType {
    domanda: string;
    risposta: string;
}

export interface ServiceRowType {
    category: string;
    path: string;
}

export function loadTestimonials(): Observable<TestimonialsRowType[]> {
    let loadExcelService = inject(LoadExcelService);
    return from(loadExcelService.loadfromTestimonialsXLSX());
}