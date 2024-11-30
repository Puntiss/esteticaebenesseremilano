import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadTestimonials } from '../resources/plugin/loadExcelService';
import { ServiziComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { ReviewComponent } from './review/review.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, resolve: { testimonials: loadTestimonials }, },
    { path: 'servizi', component: ServiziComponent },
    { path: 'contatti', component: ContactComponent },
    { path: 'review', component: ReviewComponent },
    { path: 'prodotti', component: ProductComponent },
    { path: '**', component: ErrorComponent }
];
