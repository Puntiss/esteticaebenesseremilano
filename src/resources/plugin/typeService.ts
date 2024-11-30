import { Injectable, inject } from '@angular/core';
import { categories } from '../../app/services/services.component';

@Injectable({ providedIn: 'root' }) 
export class TypeService {

  private type:string = categories[0];

  setType(type: string){
    this.type = type;
  }

  getType():string{
    return this.type;
  }

}